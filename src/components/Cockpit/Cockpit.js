import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log('[Cockpit.js] authenticated', authContext.authenticated);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        // setTimeout(() => {
        //     alert('Hello World!');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });

    // useEffect();

    let buttonStyle = [classes.Button];

    if (props.showPersons) {
        buttonStyle.push(classes.Red);
    }

    const classesAssigned = [];

    if (props.personsLength <= 1) {
        classesAssigned.push(classes.red);
    }

    if (props.personsLength <= 0) {
        classesAssigned.push(classes.bold);
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classesAssigned.join(" ")}>Hello world</p>
            <button
                className={buttonStyle.join(" ")}
                onClick={props.toggled}
                ref={toggleBtnRef}
            >
                Switch Name
            </button>
            <button 
                onClick={authContext.login}
                className={classes.Button}
            >
                Log in
            </button>
        </div>
    );
};

export default React.memo(Cockpit);
