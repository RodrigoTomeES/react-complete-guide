import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Rodrigo", age: 21},
      {name: "Regina",  age: 23}
    ],
    otherProperty: 'Other property',
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 21},
        {name: "Regina", age: 23}
      ]
    });
  }

  changedNameHandler = (event) => {
    this.setState({
      persons: [
        {name: "Rodrigo", age: 21},
        {name: event.target.value, age: 23}
      ]
    });
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  buttonStyle = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello world</h1>
          <button 
            onClick = {this.togglePersonsHandler}
            style = {this.buttonStyle}
          >
            Switch Name
          </button>
          {
            this.state.showPersons ?
            <div>
              <Person 
                name = {this.state.persons[0].name}
                age = {this.state.persons[0].age}
              >
                My Hobbies: Painting
              </Person>
              <Person 
                name = {this.state.persons[1].name} 
                age = {this.state.persons[1].age}
                click = {this.switchNameHandler.bind(this, 'Rodrigo!!')}
                changed = {this.changedNameHandler}
              />
              <p>{this.state.otherProperty}</p>
            </div>
            : null
          }
        </header>
      </div>
    );
  };
}

export default App;
