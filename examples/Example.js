import React from 'react';
import SGSwagger from '../src/index';
const config    =  '/swagger.json';

class Example extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <SGSwagger url={config} code_url='/code_snippets.json'/>
            </div>
        )
    }
}

export default Example;