import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                      name = {person.name}
                      age = {person.age}
                      key = {person.id}
                      click = {() => this.deletePersonHander(index)}
                      changed = {(event) => this.changedNameHandler(event, person.id)}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello world</h1>
          <button 
            onClick = {this.togglePersonsHandler}
            style = {buttonStyle}
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
