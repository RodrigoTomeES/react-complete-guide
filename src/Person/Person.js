import React from 'react';
import styled from 'styled-components';
// import './Person.css';

const StyleDiv = styled.div`
    width: 60%;
    border: 1px solid #eee;
    padding: 20px;
    margin: 16px auto;
    box-shadow: 0 2px 3px #ccc;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px',
    //     }
    // }

    return (
        // <div className="Person" style = {style}>
        <StyleDiv>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyleDiv>
        // </div>
    );
}

export default person;