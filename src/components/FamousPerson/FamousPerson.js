import React, { Component } from 'react';

class FamousPerson extends Component {
    state = {
        name: 'S',
        role: 'k'
    }

    handleChangeFor = (propertyName) => {
        return (event) => {
            this.setState({
                ...this.state,
                [propertyName]: event.target.value
            });
        }
    }

    render() {
        return (
            <section>
                <input onChange={ this.handleChangeFor('name') } placeholder="name"/>
                <input onChange={ this.handleChangeFor('role') } placeholder="role"/>
                <p>{this.state.name} is famous for {this.state.role}.</p>
            </section>
        )
        }
}  

export default FamousPerson;