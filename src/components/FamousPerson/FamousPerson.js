import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
      },
      input: {
        display: 'none',
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
      container: {
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'center',
      },    
  });

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
        const { classes } = this.props;
        return (
            <div>
            <CssBaseline />
            <Grid 
                container 
                direction="column"
                justify="flex-start"
                alignItems="center">
                <form className={classes.container} onSubmit={this.submitPerson}>
                    <TextField 
                        label="Name"
                        margin="normal"
                        variant="outlined"
                        className={classes.textField}
                        onChange={ this.handleChangeFor('name') } 
                        placeholder="name" 
                        value={this.state.person.name} />
                    <TextField 
                        label="Role"
                        margin="normal"
                        variant="outlined" 
                        className={classes.textField}
                        onChange={ this.handleChangeFor('role') } 
                        placeholder="role" 
                        value={this.state.person.role}/>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >ADD PERSON</Button>
                </form>
            </Grid>
            <Grid 
                container 
                direction="column"
                justify="flex-start"
                alignItems="center">
                <ul>{this.state.people.map((person, i)=><li key={i}>{person.name}is famous for {person.role}.</li>)}</ul>
            </Grid>
            </div>
        )
        }
}  

FamousPerson.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

export default withStyles(styles)(FamousPerson);