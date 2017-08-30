import React from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.css'

class Menu extends React.Component{
    
    componentWillMount(){
        this.setState({
            selected : ''
        })
    }
    tagSelect(tag){
        if (this.state && this.state.selected == tag.name){
            this.setState({
                selected: ''
            });
            return
        }
        this.setState({
            selected: tag.name
        });
    }

    isSelected(tag){
        return this.state && this.state.selected == tag.name;
    }

    getEndpoints(tag){
        return this.props.endpoints.filter((endpoint)=>{
            return endpoint.tags.indexOf(tag.name) != -1;
        })
    }

    render(){
        return(
            <div className='sg-ui-menu-bar'>
            
                <div className='sg-ui-menu-container'>
                    {this.props.items.map((item, i) =>(
                        <div className='sg-ui-menu-item' key={i}>
                            <div className='sg-ui-menu-item-text' onClick={this.tagSelect.bind(this, item)} >
                                {item.name}
                            </div>
                            {this.isSelected(item) ? 
                            (
                            <div className='sg-ui-submenu'>
                                {this.getEndpoints(item).map((endpoint, j)=>(
                                    <NavLink to={'/' + endpoint.operationId} activeClassName='sg-ui-submenu-item-selected' className='sg-ui-submenu-item' key={j}>
                                        {endpoint.operationId}
                                    </NavLink>
                                ))}
                            </div>
                            ): null
                            
                            }
                            
                        </div>
                        
                    ))}
                </div>
            
            </div>

        )
    }
}

export default Menu;