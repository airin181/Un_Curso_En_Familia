import React from "react";
import Nav from './Nav';
import logo from './../../assets/logo1.svg'

const Header = () => {
  return <header>
    <figure>
      <img src={logo} alt="Logo Un Curso en Familia" />
    </figure>
    <Nav />

  </header>
};

export default Header;