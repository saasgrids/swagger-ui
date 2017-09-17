import React from 'react';

class OverView extends React.Component{

    extractLinks(){
        var description = this.props.info.description;
        var data =[];
        var links = description.match(/\[.[^\)]*.\)/g);
        links.forEach((link)=>{
            let temp = description.split(link);
            data.push({text: temp[0], type: 'text'});
            description = temp[1];

            var links = link.split('](');
            data.push({
                text: links[0].substr(1, links[0].length -1), 
                link: links[1].substr(0, links[1].length -2),
                type: 'link'
            });
            
        })
        if(!!description){
            data.push({text: description, type: 'text'});            
        }
        return data
    }

    getAuthDetails(){
        return Object.keys(this.props.authentication).map((key)=>{
            var objAuth = this.props.authentication[key];
            objAuth.name = key;
            return objAuth;
        })
    }

    render(){
        return(
            <div className='.sg-ui-doc-main row'>
                <div className='sg-ui-doc col-d'>
                    <div className='sg-ui-doc-text'>
                        <p>
                            <span className='sg-ui-doc-heading-class'> {this.props.info.title || "API Documentation"}</span>
                            <span className='sg-ui-doc-version'>{this.props.info.version}</span>
                        </p>
                        {this.extractLinks().map((data, i)=>(
                            data.type == 'text' ? 
                            <span className='sg-ui-doc-summary' key={i}>{data.text}</span> : 
                            <span  className='sg-ui-doc-summary'key={i}>
                                <a className='sg-ui-doc-summary-link' href={data.link}>{data.text}</a>
                            </span>
                        ))}
                        <div className='sg-ui-doc-licence'>
                            <p className='sg-ui-doc-summary'>
                                <a className='sg-ui-doc-summary-link' href={this.props.info.termsOfService}>Terms of service</a>
                            </p>

                            <p className='sg-ui-doc-summary'>
                                <a className='sg-ui-doc-summary-link' href={this.props.info.contact.email}>Contact Developer</a>
                            </p>

                            <p className='sg-ui-doc-summary'>
                                <a className='sg-ui-doc-summary-link' href={this.props.info.license.url}>Licence ({this.props.info.license.name})</a>
                            </p>
                        </div>

                        <h3 className='sg-ui-doc-heading-request'>Authorization </h3>
                        {this.getAuthDetails().map((auth, i) =>(
                            <div>
                                <h3 className='sg-ui-doc-subtitle' key={i} > {auth.name}</h3>

                            </div>
                        ))}

                    </div>
                </div>
            </div>

        )
    }
}

export default OverView;