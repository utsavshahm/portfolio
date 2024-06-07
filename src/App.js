import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import HorizontalScroll from "./components/About/HorizontalScroll";
function App() {

    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setSize(window.innerWidth);
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
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="#about" element={<About />}></Route>
        </Routes>
        {/* <About/> */}
        {size <= 980 ? (<HorizontalScroll />) : <About />}
        {/* <HorizontalScroll/> */}
      </Router>
    </>
  );
}

export default App;
