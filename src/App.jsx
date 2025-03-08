import React from "react";
import {Route, Routes} from "react-router-dom";
import "./index.css";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Project from "./Routes/Project";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      
      </Routes>
    </>
  );
}

export default App;
