import React, { Component } from 'react';

class FamousPerson extends Component {
    state = {
        person: {
            name: '',
            role: ''
        }
    }

    handleChangeFor = (propertyName) => {
        return (event) => {
            this.setState({
                person:{
                    ...this.state.person,
                    [propertyName]: event.target.value
                }
            });
        }
    }

    render() {
        return (
            <section>
                <input onChange={ this.handleChangeFor('name') } placeholder="name"/>
                <input onChange={ this.handleChangeFor('role') } placeholder="role"/>
                <p>{this.state.person.name} is famous for {this.state.person.role}.</p>
                <button>Submit</button>
            </section>
        )
        }
}  

export default FamousPerson;