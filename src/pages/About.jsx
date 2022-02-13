import React from "react";


import styles from "../styles/Aboutme.module.css";
import info from "../assets/aboutme.jpg";
import line from "../assets/Line 2.png";
import logo from "../assets/logo.png"
import collage from "../assets/post.png"






const About = () => {
    return (
    <div>

      <div>
        
      <img src={line} className={styles.info} alt="line " />
      <h1> Quienes Somos</h1>
      <img src={line} className={styles.info} alt="line " />
      <div>
      <img src={info} className={styles.info} alt="Information " />
      </div>
      <div>
      <img src={logo} className={styles.logo} alt="Information " />
      <h1 className={styles.letter1}>
            John Silver Socks, es la Primera marca de medias alternatives en la ciudad
            con la que Buscamos Deslumbrar y marcar pauta con diseños únicos para 
            cautivar y llenar de arte cada uno de tus pasos.
            Tenemos una amplia variedad de productos con una excelente calidad
            Contamos con +50 modelos, + delivery. Que el protocolo principal sea tu estilo. Johnsilversocks🏴‍☠️

           </h1>
           <img src={collage} className={styles.collage} alt="Information " />

      </div>



      </div>
           
    </div>
      
    
    );
  };
  
  export default About;