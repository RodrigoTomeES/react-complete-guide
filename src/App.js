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
  }

  switchNameHandler = () => {
    // console.log("I was click!!");
    this.setState({
      persons: [
        {name: "rotome", age: 21},
        {name: "Regina", age: 23}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello world</h1>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Painting</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
          <p>{this.state.otherProperty}</p>
        </header>
      </div>
    );
  };
}

export default App;
