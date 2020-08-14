import React from 'react';
import './index.css';


const AboutComponent = (props) => {
    return (
        <div>
            <h2 className="line-margin">{props.text}</h2>
            <div className="line"></div>
            <p className="line-margin-top">{props.textmore}</p>
        </div>
    )
}

export default AboutComponent