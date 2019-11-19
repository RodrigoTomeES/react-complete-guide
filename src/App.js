import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: "Rodrigo", age: 21},
      {name: "Regina",  age: 23}
    ]
  });

  const [otherState, setOtherState] = useState({otherProperty: 'Other property'});

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        {name: newName, age: 21},
        {name: "Regina", age: 23}
      ]
    });
  }

  const changedNameHandler = (event) => {
    setPersonsState({
      persons: [
        {name: "Rodrigo", age: 21},
        {name: event.target.value, age: 23}
      ]
    });
  }

  const buttonStyle = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
        <button 
          onClick = {() => switchNameHandler('rotome')}
          style = {buttonStyle}
        >
          Switch Name
        </button>
        <Person 
          name = {personsState.persons[0].name}
          age = {personsState.persons[0].age}
        >
          My Hobbies: Painting
        </Person>
        <Person 
          name = {personsState.persons[1].name} 
          age = {personsState.persons[1].age}
          click = {switchNameHandler.bind(this, 'Rodrigo!!')}
          changed = {changedNameHandler}
        />
        <p>{otherState.otherProperty}</p>
      </header>
    </div>
  );
}

export default App;
