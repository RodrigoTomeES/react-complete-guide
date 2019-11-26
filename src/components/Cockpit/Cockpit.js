import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
    let buttonStyle = [classes.Button];

    if (props.showPersons) {
        buttonStyle.push(classes.Red);
    }

    const classesAssigned = [];

    if (props.persons.length <= 1) {
      classesAssigned.push(classes.red);
    }

    if (props.persons.length <= 0) {
      classesAssigned.push(classes.bold);
    }

    return (
        <div>
            <p className = {classesAssigned.join(" ")}>Hello world</p>
            <button 
                className = {buttonStyle.join(" ")}
                onClick = {props.toggled}
            >
                Switch Name
            </button>
        </div>
    );
};

export default cockpit;