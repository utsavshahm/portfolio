import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="#about" element={<About/>}></Route>
        </Routes>
        <About />
      </Router>
    </>
  );
}

export default App;
