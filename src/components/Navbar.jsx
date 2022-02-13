import logo from "../assets/logo.png";
import Styles from "../styles/Navbar.module.css";
import cart from "../assets/Shoppingcart (1).png";
import search from "../assets/Shoppingcart (2).png";
import line from "../assets/Line 2.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <nav>

        <Link to="/"><img src={logo} className={Styles.logo} alt="Website" /></Link>
        <ul className={Styles.list}>
          
          <li className={Styles.menuitem}><Link to="/About">Nosotros</Link></li>
          <li className={Styles.menuitem}>Productos</li>
          <li className={Styles.menuitem}>Contacto</li>
        </ul>
        <img src={cart} className={Styles.cart} alt="Shopping cart" />
        <img src={search} className={Styles.search} alt="Shopping cart" />
      </nav>
      <img src={line} className={Styles.line} alt="line" />

    </div>
  );
};

export default Navbar;
