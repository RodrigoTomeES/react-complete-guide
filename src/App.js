import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let buttonStyle = [classes.Button];
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return  <ErrorBoundary key = {person.id}>
                      <Person 
                        name = {person.name}
                        age = {person.age}
                        click = {() => this.deletePersonHander(index)}
                        changed = {(event) => this.changedNameHandler(event, person.id)}/>
                    </ErrorBoundary>
          })}
        </div>
      );

      buttonStyle.push(classes.Red);
    }

    const classesAssigned = [];

    if (this.state.persons.length <= 1) {
      classesAssigned.push(classes.red);
    }

    if (this.state.persons.length <= 0) {
      classesAssigned.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <header className={classes.AppHeader}>
          <p className = {classesAssigned.join(" ")}>Hello world</p>
          <button 
            className = {buttonStyle.join(" ")}
            onClick = {this.togglePersonsHandler}
          >
            Switch Name
          </button>
          {persons}
        </header>
      </div>
    );
  };
}

export default App;
