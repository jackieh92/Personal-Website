
import React from 'react';
import './index.css';
import image from "./menu.png"

const Navbar = () => (
        <div>
                <div id="myNav" class="overlay">
                        <a href="#" class="closebtn" onClick={closeNav}>&times;</a>
                        <div class="overlay-content">
                                <a href="#">Skills</a>
                                <a href="#">Portfolio</a>
                                <a href="#">About</a>
                                <a href="#">Contact</a>
                        </div>
                </div>
                <span className="menu-button" onClick={openNav}><img src={image}></img></span>

        </div>
);

const openNav = () => {
        document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
        document.getElementById("myNav").style.width = "0%";
}

export default Navbar;