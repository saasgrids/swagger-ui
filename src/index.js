// Demo component
// this is only example component

import React from 'react';
import Main from './components/main/Main'
import axios from 'axios'

class SGSwagger extends React.Component{
    
    componentWillMount(){
        var self = this;
        axios.get(self.props.url).then(function (res) {

            if(self.props.code_url){
                axios.get(self.props.code_url).then(function (code) {
                    self.setState({
                        spec : res.data,
                        code : code.data
                    })
                    return

                })
                    
            }
            self.setState({
                spec : res.data
            })
            return
        })
    }
    render(){
        return(
            this.state && this.state.spec ?
            <Main spec={this.state.spec} code={this.state.code}/>
            : null
        )
    }
}

export default SGSwagger

