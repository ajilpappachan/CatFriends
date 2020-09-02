import React from 'react';
import './Hello.css';

function Hello(props) {
    return (
        <div className='f1 tc'>
            <h1>Hello {props.greeting}</h1>
            <p>Welcome to React!</p>
        </div>
    );
}

export default Hello;