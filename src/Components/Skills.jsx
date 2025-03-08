import "./SkillsStyles.css";

import html from "../assests/html.webp";
import css from "../assests/css.png";
import sql from "../assests/sql.png";
import js from "../assests/js.png";
import nodejs from "../assests/nodejs.png";
import python from "../assests/python.png";
import figma from "../assests/figma.avif";
import scss from "../assests/scss.png";
import reactJS from "../assests/ReactJS.jpg";
import canva from "../assests/canva.jpeg";
import C from "../assests/C.webp";

import React from 'react'

const Skills = () => {
  
  return (
    <div className="skill-container">
      <div className="skill-title">
        <h1>MY <span className="change">SKILLS</span></h1>
      </div>
      <div className="skill-img">
        <a href=""><img src={html} alt="HTML" /></a>
        <a href=""><img src={css} alt="CSS" className="distance" /></a>
        <a href=""><img src={js} className="distance" alt="JS" /></a>
        <a href=""><img src={scss} className="distance" alt="SCSS" /></a>
        <a href=""><img src={reactJS} className="distance" alt="REACT" /></a>
        <a href=""><img src={sql} className="distance distance-responsive" alt="SQL" /></a>
        <a href=""><img src={python} className="distance" alt="PYTHON" /></a>
        <a href=""><img src={canva} className="distance" alt="CANVA" /></a>
        <a href=""><img src={figma} className="distance" alt="FIGMA" /></a>
        <a href=""><img src={nodejs} className="distance" alt="NODEJS" /></a>
        <a href=""><img src={C} className="distance" alt="C" /></a>
      </div>
    </div>
  )
}

export default Skills
