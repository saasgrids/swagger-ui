import React from 'react';
import Menu from '../menu/Menu';
import Doc from '../doc/Doc';
import OverView from '../doc/Overview';
import { Route, Switch } from 'react-router-dom'

import './Main.css'


class Main extends React.Component {
    
    getEndpoints(paths){
        var endpoints   =[];
        Object.keys(paths).forEach((path)=>{
            Object.keys(paths[path]).forEach((method)=>{
                var data = paths[path][method];
                data.path = path;
                data.method = method;
                endpoints.push(data);
            })
        });

        return endpoints;
    }

    render() {
        return (
            <div className='sg-ui'>
                <div className='sg-ui-menu-content'>
                    <Menu items={this.props.spec.tags} endpoints={this.getEndpoints(this.props.spec.paths)}/>
                </div>
                <div className='sg-ui-main-content'>
                    <Switch>

                        {
                            this.getEndpoints(this.props.spec.paths).map((endpoint, i)=>(
                                <Route path={'/' + endpoint.operationId}  render={() => (
                                    <Doc endpoint={endpoint} 
                                        host={this.props.spec.host} 
                                        basePath={this.props.spec.basePath}
                                        definitions={this.props.spec.definitions}
                                        code={this.props.code}
                                    />
                                    )} key={i}/>
                            ))
                        }

                        <Route path='/' render={() => (
                            <OverView  
                                info={this.props.spec.info}
                                authentication={this.props.spec.securityDefinitions}
                            />)}
                        />

                    </Switch>
                </div>


            </div> 
        )
    }
}

export default Main;