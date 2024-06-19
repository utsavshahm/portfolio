import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
function App() {

      const [size, setSize] = useState(window.innerWidth);
      const [height, setHeight] = useState(window.innerHeight);

      useEffect(() => {
        const handleResize = () => {
          setSize(window.innerWidth);
          setHeight(window.innerHeight)
        };

        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    
  return (
    <>
      <Router>
        <Navbar size={size} />
        <Home size={size} />
        <About size={[size, height]} />
        <Projects size={size} />
        <Experience size={[size, height]} />
        <Contact size={[size, height]} />
      </Router>
    </>
  );
}

export default App;
