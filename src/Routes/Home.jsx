import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Heroimg from '../Components/Heroimg.jsx'
import Footer from '../Components/Footer.jsx'
import Workcard from "../Components/Workcard.jsx"
import Skills from '../Components/Skills.jsx'
import AboutContent from '../Components/AboutContent.jsx'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg/>
      <Skills/>
      <Workcard/>
      <AboutContent/>
      <Footer />
    </div>
  )
}

export default Home
