import logo from "../assets/logo.png";
import Styles from "../styles/Footer.module.css";
import whatsapp from "../assets/Whatsapp_.png";
import instagram from "../assets/Instagram Circle.png";
import facebook from "../assets/Facebook.png";
import line from "../assets/Line 2.png";
import derechos from "../assets/© all rights reserved (1).png";

const Footer = () => {
  return (

    <div>
    
    <img src={line} className={Styles.line} alt="line " />

    <div className={Styles.socialmedia}>
    <div>
        <img src={whatsapp} className={Styles.whatsapp} alt="socialmedia " />
        <img src={instagram} className={Styles.instagram} alt="socialmedia " />
        <img src={facebook} className={Styles.facebook} alt="socialmedia " />
        <img src={derechos} className={Styles.derechos} alt="socialmedia " />

    </div>

    <img src={logo} className={Styles.logo} alt="logopage " />

    </div>

    <h4>Made by Andreina Suescum</h4>

    </div>
  
  );
};

export default Footer;
