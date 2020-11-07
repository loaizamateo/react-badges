import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';

class BadgeNew extends React.Component{
    state = {
        form: {
          firstName: '',
          lastName: '',
          email: '',
          jobTitle: '',
          twitter: '',
        },
      };

    handleChange = e => {
        // const nextForm = this.state.form
        // nextForm[e.target.name] = e.target.value;
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        })
    }

    render(){
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                            firstName={this.state.form.firstName} 
                            lastName={this.state.form.lastName} 
                            jobTitle={this.state.form.jobTitle} 
                            twitter={this.state.form.twitter}  
                            email={this.state.form.email}  
                            avatarUrl="https://s.gravatar.com/avatar/33aa77d8ef78047ab18bdfc9f131d373?s=80"/>
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                            onChange={this.handleChange} 
                            formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;