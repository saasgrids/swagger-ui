import React from 'react';
import Parameters from '../parameters/Parameters'
import CodeSnippet from '../code_snippet/CodeSnippet';
import RestClient from '../rest_client/RestClient';
import './Doc.css'


class Doc extends React.Component{

    isBodyNeeded(){
        console.log(this.props)
        return this.props.endpoint.parameters.filter((param)=>(param.in=='body')).length >0;
    }

    render(){
        return(
            <div className='.sg-ui-doc-main row'>
                <div className='sg-ui-doc col-d'>
                    <div className='sg-ui-doc-text'>
                    <h1>
                        <span className='sg-ui-doc-heading-class'>{this.props.endpoint.tags[0] +' :: '}</span>
                        <span className='sg-ui-doc-heading-function'>{this.props.endpoint.operationId}</span>
                    </h1>
                    <p className='sg-ui-doc-auth'>*Requires Authorization</p>
                    <p className='sg-ui-doc-summary' > 
                        {this.props.endpoint.summary}. 
                        <span className='sg-ui-doc-summary-link'> Try it now </span>
                        or 
                        <span className='sg-ui-doc-summary-link'> see an example now</span>
                    </p>
                    <p className='sg-ui-doc-summary'> {this.props.endpoint.description} </p>
                    <h3 className='sg-ui-doc-heading-request'>Request </h3>

                    <h3 className='sg-ui-doc-subtitle' > HTTP Request</h3>
                    <p className='sg-ui-doc-endpoint'>
                        <span className='sg-ui-doc-method'>{this.props.endpoint.method}</span>
                        {'http://' + this.props.host+ this.props.basePath + this.props.endpoint.path}
                    </p>
                    <h3 className='sg-ui-doc-subtitle' > Parameters</h3>
                    <Parameters 
                        parameters={this.props.endpoint.parameters} 
                        definitions={this.props.definitions}
                        types={['path', 'query']}
                    />

                    <h3 className='sg-ui-doc-subtitle' > Request body</h3>
                    {this.isBodyNeeded()? 
                        <Parameters 
                            parameters={this.props.endpoint.parameters} 
                            definitions={this.props.definitions}
                            types={['body']}
                        />:
                        <p>Do not supply a request body with this method.</p>
                    }
                    </div>

                    {this.props.code && this.props.code[this.props.endpoint.operationId] ?
                        <CodeSnippet code={this.props.code[this.props.endpoint.operationId]}/>:
                        null
                    }
                    
                </div>
                <div className='col-r .sg-ui-rest'>
                    <RestClient 
                        endpoint={this.props.endpoint}
                        definitions={this.props.definitions}
                        url={'http://' + this.props.host+ this.props.basePath + this.props.endpoint.path}
                    />
                </div>
            </div>
        )
    }
}

export default Doc;