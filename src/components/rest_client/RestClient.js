import React from 'react';
import  './RestClient.css';

class RestClient extends React.Component{

    componentWillMount(){
       this.setState({
           url : this.props.url,
           query:{data:'test', asdf: 'asdf'},
           body:{},
           path:{}
       })
    }

    getUrl(){
        var url = this.state.url;
        if(Object.keys(this.state.query).length > 0){
            url += '?';
            for(var k in this.state.query){
                url+= k+'='+this.state.query[k] + '&';
            }
        }
       
        return url;
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
                   <span> <div className='sg-ui-params-tab-item'>
                    </div>
                    <div className='sg-ui-params-tab-item'>
                    </div>
                    <div className='sg-ui-params-tab-item sg-ui-params-tab-item-selected'>
                    </div></span>
                </div>
            </div>
        )
    }

}

export default RestClient;