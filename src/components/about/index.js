import React from 'react';
import './index.css';
import AboutComponent from '../about-modules';
import AboutHeader from '../about-header';


const About = () => {
    return (
        <div className="about" id="about">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 center about-title">
                    <AboutHeader text={'Click to see my Resume'} header={'About'}/>
                </div>
                <div className="col-md-4"></div>

            </div>
            <div className="row margin-top">
                <div className="col-md-4 center">
                <AboutComponent text={'Frameworks'} textmore={'React, jQuery, AngularJS, Angular, Flask'}/>
                </div>
                <div className="col-md-4 center">
                <AboutComponent text={'Tools'} textmore={'GitHub, VS Code, Google Developer Tools, Adobe Photoshop, Adobe illustrator, InDesign, Anaconda, Jupyter Notebook'}/>
                </div>
                <div className="col-md-4 center">
                <AboutComponent text={'Technologies'} textmore={'Bootstrap UI, UX, Web Forms, API, REST API'}/>
                </div>
                </div>
                <div className="row margin-top">
                <div className="col-md-4 center">
                <AboutComponent text={'DataBase'} textmore={'MySQL, PostgreSQL, SQLite, PgAdmin, SQL, Numpy, Firebase'}/>
                </div>
                <div className="col-md-4 center ">
                <AboutComponent text={'Languages'} textmore={'HTML5, CSS3, JavaScript, Python, SQL, SaSS'}/>
                </div>
                <div className="col-md-4 center">
                <AboutComponent text={'Software'} textmore={'Microsoft Office Suite (Excel, PowerPoint, Word), Adobe Creative Suite'}/>
                </div>
                
                </div>
        </div>
    )
}

export default About