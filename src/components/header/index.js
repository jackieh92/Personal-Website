import React from 'react';
import './index.css';
import image from "./arrow.png"
import Navbar from '../navbar';

const Header = () => {
    return (
        <div className="header">
            <div class="row">
                <div class="col-md-11"></div>
                <div class="col-md-1"><Navbar/></div>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6"><div className="logo">
                    <div className="logoname">
                        Jacqueline Raye
                    <h2>Full Stack Web Developer</h2></div>
                </div>

                </div>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6"><div id="inspire">
                    <h3>Welcome To my Website</h3>
                    <h3 id="arrow">
                        <a id="scrollDown" href="#about">
                            <img src={image}/>
                        </a>
                    </h3>
                </div>
                </div>
            </div>


        </div>
    )
}

export default Header;