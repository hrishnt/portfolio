import "./FooterStyles.css";
import React from 'react';

import {FaGithub, FaHome, FaLinkedin, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
            <div>
            <a href=""><p>San Marcos, TX</p></a>
            <a href=""><p>United States</p></a>
            </div>
            </div>
            <div className="email">
                <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} /><a href="">
                sharmahrishant90@gmail.com</a></h4>
            </div>
            
        </div>
        <div className="right">
            <h4>About Me</h4>
            <p>I love solving problems, building innovative solutions, and expanding my knowledge through hands-on experience. Always eager to learn and experiment with new tools, I'm on a journey to create impactful tech solutions</p>
            <div className="social">
             <a href="https://github.com/hrishnt" className="github">
            <FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}} />
            </a>
            <a href="https://www.linkedin.com/in/hrishant-sharma-68a334329/" className="linkedin">
            <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} />
            </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
