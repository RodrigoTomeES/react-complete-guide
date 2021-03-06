import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    // New version to use Refs
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // Old version to use Refs
        // this.inputElement.focus();

        //New version to use Refs
        this.inputElementRef.current.focus();

        console.log('[Person.js] authenticated', this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');
        // const rnd = Math.random();
    
        // if (rnd > 0.7) {
        //     throw new Error('Something went wrong');
        // }
    
        return (
            <Aux>
                {this.context.authenticated ? (
                <p>Authenticated!</p>
                ) : (
                <p>Please log in</p>
                )}
                <p onClick={this.props.clicked}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}
                    // Old version to use Refs
                    // ref={(inputEL) => {this.inputElement = inputEL}}

                    //New version to use Refs
                    ref={this.inputElementRef}
                />
            </Aux>
        );
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    clicked: PropTypes.func,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);
