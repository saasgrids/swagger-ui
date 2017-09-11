import React from 'react';
import  './RestClient.css';
import InputGroup from './InputGroup'


class RestClient extends React.Component{

    componentWillMount(){
        var state = {
            url : this.props.url,
            query: getParamsValue(this.props.endpoint.parameters, 'query'),
            body: getBody(this.props.endpoint.parameters, this.props.definitions),
            header:[],
            path: getParamsValue(this.props.endpoint.parameters, 'path'),
            selectedTab : 'path',
            bodyErr : null
        }
        this.setState(state)

      
    }

    
    getTabClassName(item){
        if(item == this.state.selectedTab){
            return 'sg-ui-params-tab-item sg-ui-params-tab-item-selected'
        }
        return 'sg-ui-params-tab-item';
    }

    selectTab(item){

        this.setState({
            selectedTab: item
        })
    }
    bodyChange(evt){
        this.setState({
            body: evt.target.value
        });
    }

    getUrl() {
        var url = this.props.url;
        var params = url.match(/\{[^}]*\}/g);
        if(params){
            console.log(params)
            params.forEach((param)=>{
                var key = param.substr(1, param.length-2);
                console.log(!!this.state.path.find((path) =>(path.key == key)))
                var pathObject = this.state.path.find((path) =>(path.key == key));
                if(!!pathObject && !!pathObject.value){
                    url = url.replace(param, pathObject.value)
                }
            })
        }
        if(this.state.query.length > 0){
            url += '?';
            var validQueries = this.state.query.filter((query)=>(query.enabled == true));
            url += validQueries.map((query)=>(query.key + '=' + query.value)).join('&');
        }
       
        return url;
    }

    onParamsChange(type, index, key, newVal, evt){
        var newObj = this.state[type];
        newObj[index][key] = newVal;
        var newState = {};
        newState[type] = newObj;
        console.log(newState)
        this.setState(newState)
    }
    addField(){
        var state ={};
        state[this.state.selectedTab] = [
            ...this.state[this.state.selectedTab],
            {
                key : 'newField',
                value:undefined,
                enabled : true,
            }
        ]
        this.setState(state);

    }

    validateBody(){
        if(!validateJson(this.state.body)){
            this.setState({
                bodyErr : 'Invalid Json'
            })
        }else{
            this.setState({
                bodyErr : null
            })
        }
    }

    
    render(){
        return (
            <div className="sg-ui-rest-client">
                <div className='sg-ui-rest-client-title'>
                    Test API Calls
                </div>
                <div className='sg-ui-rest-url'>
                    <span className='sg-ui-rest-method'>{this.props.endpoint.method}</span>
                    {this.getUrl()}
                </div>
                <div className='sg-ui-params-tab'>
                   <span> 
                        <div className={this.getTabClassName('path')} onClick={this.selectTab.bind(this, 'path')}>
                            path
                        </div>
                        <div className={this.getTabClassName('query')} onClick={this.selectTab.bind(this,'query')}>
                            query
                        </div>
                        <div className={this.getTabClassName('header')} onClick={this.selectTab.bind(this,'header')}>
                            header
                        </div>
                        <div className={this.getTabClassName('body')} onClick={this.selectTab.bind(this,'body')}>
                            body
                        </div>
                        
                    </span>
                </div>
                <div className='sg-ui-params'>
                    {this.state.selectedTab == 'query' ?
                        this.state.query.map((query, i)=>(
                        <div className='sg-ui-params-item'  key={i}>
                            <InputGroup enabled={query.enabled} keyVal={query.key} value={query.value} key={i} onParamsChange= {this.onParamsChange.bind(this, 'query', i)}/>
                        </div>
                    )): null
                    }
                    

                    {this.state.selectedTab == 'path' ?
                        this.state.path.length == 0 ? 
                            <div>Do not supply any path parameters with this method.</div>:
                            this.state.path.map((query, i)=>(
                                <div className='sg-ui-params-item'  key={i}>
                                    <InputGroup enabled={query.enabled} keyVal={query.key} value={query.value} key={i} onParamsChange= {this.onParamsChange.bind(this, 'path', i)} disableUncheck={true}/>
                                </div>
                            )): null
                    }

                    {this.state.selectedTab == 'header' ?
                        this.state.header.map((query, i)=>(
                        <div className='sg-ui-params-item'  key={i}>
                            <InputGroup enabled={query.enabled} keyVal={query.key} value={query.value} onParamsChange= {this.onParamsChange.bind(this, 'header', i)}/>
                        </div>
                    )): null
                    }

                    {this.state.selectedTab == 'body' ?
                        this.state.body ?
                            <textarea  
                                defaultValue={this.state.body}
                                className='sg-ui-request-body'
                                onChange={this.bodyChange.bind(this)}
                                onBlur={this.validateBody.bind(this)}
                            />
                            : <div>Do not supply a request body with this method.</div>
                            
                        :null
                    }
                    

                    {this.state.selectedTab != 'path' && this.state.selectedTab != 'body'?
                        (
                            <div className='sg-ui-params-item sg-ui-pointer' onClick={this.addField.bind(this)}>
                                add new row
                            </div>
                        ): null
                    
                    }

                    {this.state.bodyErr ?
                        <div className='sg-ui-err'> {this.state.bodyErr}</div>
                        :null
                    }
                    
                </div>
            </div>
        )
    }

}

const getParamsValue  = (params, type) =>(
    params.filter((param)=>(param.in == type)).map((param) =>({
        key : param.name,
        value:null,
        enabled : true,
    }))
);

const getBody  = (params, definitions) =>{
    var body= {};
    var bodyParams = params.filter((param)=>(param.in == 'body'));
    
    if(bodyParams && bodyParams.length ==1 && bodyParams[0].schema && bodyParams[0].schema['$ref']){
        var ref = bodyParams[0].schema['$ref'].split('/');
        var strRef = ref[ref.length -1];
        var data    = definitions[strRef].properties;
        Object.keys(data).forEach((key)=>{
            body[key] = null
        });
        return JSON.stringify(body, null, 4);        
    }
    return null;
    

}

const validateJson = (str)=>{
    try{
        JSON.parse(str)
        return true;
    }catch(e){
        return false;
    }
}


export default RestClient;