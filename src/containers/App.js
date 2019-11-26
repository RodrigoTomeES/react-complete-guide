import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id: '1', name: "Rodrigo", age: 21},
      {id: '2', name: "Regina",  age: 23}
    ],
    otherProperty: 'Other property',
    showPersons: false,
    showCockpit: true,
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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
    console.log('[App.js] render');
    let persons = null;
    
    if (this.state.showPersons) {
      persons = <Persons
                  persons={this.state.persons}
                  clicked={this.deletePersonHander}
                  changed={this.changedNameHandler}
                />;
    }

    return (
      <WithClass classes={classes.App}>
        <header className={classes.AppHeader}>
          <button
            onClick={() => {
              this.setState({ showCockpit: false });
            }}
          >
            Remove Cockpit
          </button>
          {this.state.showCockpit ? (
            <Cockpit 
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              toggled={this.togglePersonsHandler}
            />
          ) : null}
          {persons}
        </header>
      </WithClass>
    );
  };
}

export default App;
