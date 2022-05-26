import React from "react";
import Nav from './Nav';
import logo from './../../assets/logo1.svg'

import { Link } from "react-router-dom";

const Header = () => {
  return <header>
    <Nav />
    <figure>
      <Link to='/'>
        <img src={logo} alt="Logo Un Curso en Familia" />
      </Link>
    </figure>

  </header>
};

export default Header;