import React from 'react';
import './Parameters.css'

const getState = (props)=>{
    var body = props.parameters.filter((param)=>(param.in == 'body'));
    var path = props.parameters.filter((param)=>(param.in == 'path'));
    var query = props.parameters.filter((param)=>(param.in == 'query'));

    if(body && body.length ==1 && body[0].schema && body[0].schema['$ref']){
        var ref = body[0].schema['$ref'].split('/');
        var strRef = ref[ref.length -1];
        var data    = props.definitions[strRef].properties;
        body = Object.keys(data).map((key)=>{
            var param = data[key];
            param.name = key;
            return param;
        });
    }
    
    return({
        body: body,
        path : path,
        query: query
    })
}

const Param = (props)=>(
    
    props.params && props.params[props.type] && props.params[props.type].length > 0 ?
        <div>
            <div className='row sg-ui-parameter-type'>
                <div className='col-5'>
                {props.type} parameters
                </div>
            </div>
            <div>{
                props.params[props.type].map((param, i)=> (
                    <div className='row sg-ui-parameter-item' key={i}>
                        <div className='col-1 sg-ui-parameter-text'>
                            <div>{param.name}</div>
                        </div>
                        <div className='col-1 sg-ui-parameter-text'>
                        {param.type}
                        </div>
                        <div className='col-3 sg-ui-parameter-description'>
                        {param.description}
                        </div>

                    </div>
                ))
            }</div>
        </div>: null
    
)

class Parameters extends React.Component{
    constructor(props){
        super(props);
       
    }
    componentWillMount(){
        this.setState(getState(this.props))
               
    }

    componentWillReceiveProps(props){
        this.setState(getState(props))
    }
    render(){
        return(
            <div>
                <div className='row sg-ui-parameters-title'>
                    <div className='col-1'>
                        Parameter
                    </div>
                    <div className='col-1 '>
                        Type
                    </div>
                    <div className='col-3'>
                        Description
                    </div>
                </div>
                {
                    this.props.types.map((type,i) =>(
                        <Param params={this.state} type={type} definitions={this.props.definitions} key={i}/>
                    ))
                }
                         
            </div>

        )

    }
}

export default Parameters;