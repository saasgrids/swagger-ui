import React from 'react';
import SGSwagger from '../src/index';
const config    =  '/swagger.json';
const code_url='/code_snippets.json';
import axios from 'axios'

class Example extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        var self = this;
        axios.get(config).then(function (res) {

            if(code_url){
                console.log('Got Data', res.data)
                axios.get(code_url).then(function (code) {
                    self.setState({
                        spec : res.data,
                        code : code.data
                    })
                })
                    
            }else{
                self.setState({
                    spec : res.data
                })
            }
        })
    }

    render() {
        return (
            this.state && this.state.spec ?
                <SGSwagger spec={this.state.spec} code={this.state.code} />
                : null
        )
    }
}

export default Example;