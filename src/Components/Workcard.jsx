import "./WorkcardStyles.css" 
import React from 'react'

import Logo from "../assests/Logo.jpeg";
import pro1 from "../assests/pro1.png";
import pro2 from "../assests/pro2.png";
import pro3 from "../assests/pro3.png";

import { NavLink } from "react-router-dom";

const Workcard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">
            WORKS
        </h1>
        <div className="project-container">
            <div className="project-card">
                <img src={pro1} alt="image"/>
                <h2 className="project-title">An Education <span className="change">Website</span></h2>
                <div className="pro-details">
                    {/* <p>Educity is a modern, responsive institutional education website designed to provide seamless access to academic programs, admissions, and student resources. With a clean and intuitive interface, Educity ensures an engaging user experience across all devices. </p> */}
                    <div className="pro-btns">
                        <NavLink to="https://hrishnt.github.io/edusity/" className="btn btn-blue">View</NavLink>
                        <NavLink to="https://github.com/hrishnt/edusity" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src={pro2} alt="image"/>
                <h2 className="project-title">Tours & Travels <span className="change">Website</span></h2>
                <div className="pro-details">
                    {/* <p>Traveller is a modern, user-friendly tours and travel website designed to provide seamless trip planning and booking experiences. It offers an intuitive interface where users can explore destinations, book tours, and get travel insights. Made using codesandbox</p> */}
                    <div className="pro-btns">
                        <NavLink to="https://7d9p99.csb.app/" className="btn btn-blue">View</NavLink>
                        <NavLink to="https://github.com/hrishnt/Traveller" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src={pro3} alt="image"/>
                <h2 className="project-title">Food Delivery <span className="change">Website</span></h2>
                <div className="pro-details">
                    {/* <p>FooDx is a modern, fast, and user-friendly food delivery website designed to connect customers with their favorite restaurants. With a seamless ordering system, real-time tracking, and multiple payment options, FooDx ensures a hassle-free food delivery experience.

</p> */}
                    <div className="pro-btns">
                        <NavLink to="url.com" className="btn btn-blue">View</NavLink>
                        <NavLink to="https://github.com/hrishnt" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Workcard
