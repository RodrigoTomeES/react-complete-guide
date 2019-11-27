import React, {PureComponent} from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from '../Persons/Person/Person';

class Persons extends PureComponent {
    // This isn't useful because this component does not have state

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // Instead of check all props you can use PureComponent. 
    // PureComponent already implements shouldComponentUpdate checking all props properties.

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     return  this.props.persons !== nextProps.persons ||
    //             this.props.clicked !== nextProps.clicked ||
    //             this.props.changed !== nextProps.changed;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    render() {
        console.log('[Persons.js] rendering...');
        return (
            this.props.persons.map((person, index) => {
                return  <ErrorBoundary key = {person.id}>
                            <Person 
                                name = {person.name}
                                age = {person.age}
                                clicked = {() => this.props.clicked(index)}
                                changed = {(event) => this.props.changed(event, person.id)}/>
                        </ErrorBoundary>
            })
        );
    }
}

export default Persons;
