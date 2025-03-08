import React from 'react';

import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'
import Heroimg2 from '../Components/Heroimg2.jsx';
import Workcard from '../Components/Workcard.jsx';

import projects from "../assests/projects.jpg" 

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 image={projects} heading="PROJECTS" text="Some of my most recent works"/>
      <Workcard/>
      <Footer/>
    </div>
  )
}

export default Project
