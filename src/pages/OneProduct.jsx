import Styles from "../styles/OneProduct.module.css";
import React from "react";
import logo from "../assets/logo.png";
import line from "../assets/Line 2.png";
import GridProducts from "../components/GridProducts"
import products from "../api/Api";



const OneProduct = () => {
  
    return (
      <>
        <div>

            <GridProducts products={products}/>

          <nav>
            
              <img src={logo} className={Styles.logo} alt="Website" />
              <div>
              <h1>
                  hola
              </h1>
  
              </div>
              
           
          </nav>
          <img src={line} className={Styles.line} alt="line" />
        </div>
        
        
          
       
      </>
    );
  };
  
  export default OneProduct;
