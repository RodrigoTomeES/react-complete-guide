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

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: "rotome", age: 21},
        {name: "Regina", age: 23}
      ]
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My Hobbies: Painting</Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
        <p>{otherState.otherProperty}</p>
      </header>
    </div>
  );
}

export default App;
