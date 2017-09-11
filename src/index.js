// Demo component
// this is only example component

import React from 'react';
import Main from './components/main/Main'
import './index.css'
class SGSwagger extends React.Component{
    
   
    render(){
        return(<Main spec={this.props.spec} code={this.props.code}/>)
    }
}

export default SGSwagger

