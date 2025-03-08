import "./Heroimgstyles.css";
import React from 'react';
import background from "../assests/background.avif";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={background} alt="introimg"/>
      </div>
      <div className="content">
        <h1 className="typing-text">
          HI, THIS IS <span className="change">
            <Typewriter
              words={['HRISHANT!']}
              loop={0}  
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </span>
        </h1>
        <h2 className="subheading">Code Craftsman</h2>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimg;
