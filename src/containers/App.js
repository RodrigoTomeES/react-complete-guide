import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id: '1', name: "Rodrigo", age: 21},
      {id: '2', name: "Regina",  age: 23}
    ],
    otherProperty: 'Other property',
    showPersons: false,
  }

  deletePersonHander = (indexPerson) => {
    const persons = [...this.state.persons];
    persons.splice(indexPerson, 1);
    this.setState({persons: persons});
  }

  changedNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  render() {
    let persons = null;
    
    if (this.state.showPersons) {
      persons = <Persons
                  persons={this.state.persons}
                  clicked={this.deletePersonHander}
                  changed={this.changedNameHandler}
                />;
    }

    return (
      <div className={classes.App}>
        <header className={classes.AppHeader}>
          <Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            toggled={this.togglePersonsHandler}
          />
          {persons}
        </header>
      </div>
    );
  };
}

export default App;
