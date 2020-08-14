import React from 'react';
import './index.css';
import image from "./8.png"
import AboutComponent from '../about-modules';

const Experience = () => {
    return (
        <div className="background-image">
        <div className="row ">
            <div className="col-md-12 experience">
                <h1>Experience</h1>
                <img src={image} className="margin-top"></img>
            </div>
            <div className="row background-color-xp center">
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <AboutComponent text={'From Concept To Completion'} textmore={"Having a penchant for creating websites completely from nothing.  I am proficient in the major front-end technologies and frameworks including: HTML5, CSS3, Sass, Bootstrap v3, JavaScript, jQuery and AngularJS. Allowing for web apps to be more well-rounded, I employ the projects that cater to the CRUD/REST principles with Python/Django."}/>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4">
                <AboutComponent text={'Another Thing Here'} textmore={"Having a penchant for creating websites completely from nothing.  I am proficient in the major front-end technologies and frameworks including: HTML5, CSS3, Sass, Bootstrap v3, JavaScript, jQuery and AngularJS. Allowing for web apps to be more well-rounded, I employ the projects that cater to the CRUD/REST principles with Python/Django."}/>
                </div>
                <div className="col-md-1"></div>
                
            </div>
            </div>
            </div>
       

    )
}

export default Experience