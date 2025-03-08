import React from 'react'

import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'
import Heroimg2 from "../Components/Heroimg2.jsx";
import  Form  from "../Components/Form.jsx";
import Cont from "../assests/Cont.jpg";


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 image={Cont} heading="CONTACT" text="Let's get connected 😃"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
