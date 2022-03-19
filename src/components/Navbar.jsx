import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import Styles from "../styles/Navbar.module.css";
import cart from "../assets/Shoppingcart (1).png";
import search from "../assets/Shoppingcart (2).png";
import line from "../assets/Line 2.png";
import { Link } from "react-router-dom";

import useCheckMobileScreen from "../hook/isMobile";

import styled from "styled-components";

const SidebarMobile = styled.div`
  width: 280px;
  height: 100vh;
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: ${(props) => {
    return props.isShow === true ? "0px" : "-100%";
  }};
  top: 0;
  z-index: 9999;
  transition: all ease .3s;
`;

const Navbar = () => {
  const isMobile = useCheckMobileScreen();

  const [showCart, setShowCart] = useState(false);

  useEffect(() => {}, [showCart]);

  const toggleCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };
  return (
    <>
      <div>
        <nav>
          <Link to="/">
            <img src={logo} className={Styles.logo} alt="Website" />
          </Link>
          {isMobile === false && (
            <ul className={Styles.list}>
              <li className={Styles.menuitem}>
                <Link to="/About">Nosotros</Link>
              </li>
              <li className={Styles.menuitem}>Productos</li>
              <li className={Styles.menuitem}>Contacto</li>
            </ul>
          )}
          {isMobile === true && (
            <button onClick={() => toggleCart()}>MENU</button>
          )}
          <img src={cart} className={Styles.cart} alt="Shopping cart" />
          <img src={search} className={Styles.search} alt="Shopping cart" />
        </nav>
        <img src={line} className={Styles.line} alt="line" />
      </div>
      <SidebarMobile isShow={showCart}>
        <li>
          <button onClick={() => closeCart()}>
            Cerrar
          </button>
        </li>
        <li className={Styles.menuitem}>
          <Link to="/About">Nosotros</Link>
        </li>
        <li className={Styles.menuitem}>Productos</li>
        <li className={Styles.menuitem}>Contacto</li>
      </SidebarMobile>
    </>
  );
};

export default Navbar;
