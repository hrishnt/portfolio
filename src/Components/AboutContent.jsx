import { Link } from "react-router-dom";
import "./AboutContentStyles.css"; 
import React from 'react'
import About1 from "../assests/About1.jpg"
import About2 from "../assests/About2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>WHO AM I?</h1>
        <p className="decorate">I'm a passionate self-taught developer exploring the world of coding and constantly working on new projects!💻</p>
        <Link to="/contact">
        <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={About1} alt="" />
            </div>
            <div className="img-stack bottom"> 
            <img src={About2} alt="" /> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
