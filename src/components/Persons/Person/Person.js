import React, {Component} from 'react';
import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        // const rnd = Math.random();
    
        // if (rnd > 0.7) {
        //     throw new Error('Something went wrong');
        // }
    
        return (
            <Aux>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        );
    }
}

export default withClass(Person, classes.Person);