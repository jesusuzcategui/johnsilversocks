import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer"
import About from "./pages/About";




function App() {
  return (
    <>
      <div className="App">
       
        
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route> 
          </Routes>
        </Router>
        
        <Footer />
      </div>
    </>
  );
}

export default App;
