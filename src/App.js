import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${props => props.showPersons ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid black;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.showPersons ? 'salmon' : 'lightgreen'};
    color: black;
  }
`; 

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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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

      buttonStyle.backgroundColor = 'red';
      buttonStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];

    if (this.state.persons.length <= 1) {
      classes.push("red");
    }

    if (this.state.persons.length <= 0) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <header className="App-header">
          <p className = {classes.join(" ")}>Hello world</p>
          <StyledButton 
            showPersons = {this.state.showPersons} 
            onClick = {this.togglePersonsHandler}
          >
            Switch Name
          </StyledButton>
          {persons}
        </header>
      </div>
    );
  };
}

export default App;
