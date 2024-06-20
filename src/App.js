import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
function App() {

      const [width, setwidth] = useState(window.innerWidth);
      const [height, setHeight] = useState(window.innerHeight);

      useEffect(() => {
        const handleResize = () => {
          setwidth(window.innerWidth);
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
        <Navbar size={width} />
        <Home size={width} />
        <About size={[width, height]} />
        <Projects size={width} />
        <Experience size={[width, height]} />
        <Contact size={[width, height]} />
      </Router>
    </>
  );
}

export default App;
