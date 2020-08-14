import React from 'react';
import './index.css';

const AboutHeader = (props) => {
    return (
        <div>
            <h1>{props.header}</h1>
            <img src="http://www.sashasasha.tech/images/me10.png"></img>
            <p><a href="#" className='line-margin'>{props.text}</a></p>
        </div>
    )
}


export default AboutHeader