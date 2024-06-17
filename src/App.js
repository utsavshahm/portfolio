import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
function App() {
    
  return (
    <>
      <Router>
        <Navbar />
        <Home/>
        <About />
        <Projects/>
      </Router>
    </>
  );
}

export default App;
