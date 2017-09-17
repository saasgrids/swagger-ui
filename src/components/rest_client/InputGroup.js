import React from 'react';

class InputGroup extends React.Component{

    componentWillMount(){
        this.setState({
            enabled : this.props.enabled,
            key : this.props.keyVal,
            value: this.props.value,
            disableUncheck: this.props.disableUncheck
        })
    }
    onParamsChange(key, evt){
        var state = {};
        state[key] = evt.target.value;
        this.setState(state);
        this.props.onParamsChange(key, evt.target.value)
    }
    onChecked(){

        this.props.onParamsChange('enabled', !this.state.enabled)        
        this.setState({
            enabled : !this.state.enabled
        })
        
    }
    render(){
        return (
            
            <span>
                <input type="checkbox" disabled={this.state.disableUncheck} checked={this.state.enabled} onChange={this.onChecked.bind(this)}/>
                <input type="text" className='sg-ui-params-text' value={this.state.key} onChange={this.onParamsChange.bind(this,'key')}/>
                <input type="text" className='sg-ui-params-text' value={this.state.value} onChange={this.onParamsChange.bind(this,'value')}/>
            </span>
            
        )
    }
}

export default InputGroup;