import React from 'react';
import './index.css';

const CharacteristicsComponents = (props) => {
    return (
            <div className="container-for-char" id="sectionStrong">
            <div className="image-char-cont"><img src={props.url} className="characteristic-image"></img></div>
            
            <div className="characteristic">
                <h1 className="characteristic-header">{props.header}</h1>
                <p className="characteristic-paragraph">{props.paragraph}</p>
                </div>
        </div>


    )
}

export default CharacteristicsComponents;