import React from 'react';
import './CodeSnippet.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { googlecode } from 'react-syntax-highlighter/dist/styles';

class CodeSnippet extends React.Component{

    componentWillMount(){
        this.setState({
            selected: this.props.code[0]
        })
    }
    isSelected(lang){
        return this.state && this.state.selected.lang == lang.lang;
    }
    select(lang){
        this.setState({
            selected: lang
        })
    }
    getCode(){
        if(this.state && this.state.selected){
            return this.state.selected.snippet.join('\r\n'); 
        }
        return ""
    }

    getClassName(lang){
        if(this.state && this.state.selected.lang == lang.lang){
            return 'sg-ui-code-tabs-item sg-ui-code-tabs-item-selected'
        }
        return 'sg-ui-code-tabs-item';
    }
    render(){
        return(
            <div>
                <h1 className='sg-ui-code-heading'>Examples</h1>
                <div className='sg-ui-code-container'>
                    <div className='sg-ui-code-tabs'>
                        {this.props.code.map((lang, i)=>(
                            <span className={this.getClassName(lang)} key={i} onClick={this.select.bind(this,lang)}>{lang.lang}</span>
                        ))}
                    </div>
                    <div className='sg-ui-code-snippet'>
                        <SyntaxHighlighter language={this.state.selected.lang} style={googlecode} showLineNumbers={true}>{this.getCode()}</SyntaxHighlighter>
                    </div>
                </div>
            </div>
        )
    }
}

export default CodeSnippet