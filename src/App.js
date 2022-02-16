import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer"
import About from "./pages/About";
import Product from './pages/Product';
import OneProduct from "./pages/OneProduct.jsx"





function App() {
  return (
    <>
      <div className="App">
       
        
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route> 
            <Route path="/product/:idproduct" element={<Product />}></Route> 
            <Route path="/product" element={<OneProduct />}></Route> 

            

            
          </Routes>
        </Router>
        
        <Footer />
      </div>
    </>
  );
}

export default App;
