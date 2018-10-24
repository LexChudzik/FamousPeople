import React, { Component } from 'react';

class FamousPerson extends Component {
    state = {
        person: {
            name: '',
            role: ''
        },
        people: []
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

    submitPerson = (event) => {
        event.preventDefault();
        this.setState({
            person: {
                name: '',
                role: ''
            },
            people: [...this.state.people, this.state.person]
        })
    }

    render() {
        return (
            <div>
            <section>
                <form onSubmit={this.submitPerson}>
                    <input onChange={ this.handleChangeFor('name') } placeholder="name" value={this.state.person.name} />
                    <input onChange={ this.handleChangeFor('role') } placeholder="role" value={this.state.person.role}/>
                    <input type="submit" value="Add Person"/>
                </form>
            </section>
            <section>
                <ul>{this.state.people.map((person, i)=><li key={i}>{person.name}is famous for {person.role}.</li>)}</ul>
            </section>
            </div>
        )
        }
}  

export default FamousPerson;