import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'

import Heroimg2 from "../Components/Heroimg2.jsx";
import AboutContent from '../Components/AboutContent.jsx';
import Aboutus from "../assests/Aboutus.jpg"


const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 image = {Aboutus} heading="ABOUT ME" text="I thrive on coding and innovation."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
