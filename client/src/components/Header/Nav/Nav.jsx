import React, { useState, useContext } from "react";
import Hamburger from 'hamburger-react'
import { LoginContext } from "../../../context/loginContext";
import formas1 from './../../../assets/formas1.svg';
import formas2 from './../../../assets/formas2.svg';
import formas3 from './../../../assets/formas3.svg';
import formas4 from './../../../assets/formas4.svg';

import { Link, Navigate } from 'react-router-dom';
import axios from "axios";


const Nav = () => {
  const { logged, setLogged, user, setUser } = useContext(LoginContext);
  const [isOpen, setOpen] = useState(false)

  const handleLogout = async () => {
    const response = await axios.get(process.env.REACT_APP_LOGOUT_URL + user);
    const logoutResponse = response.data;
    if (logoutResponse.msg === "Token deleted") {
      setLogged(false);
      setUser("");
    };
    <Navigate to='/Home' />
  };

  return(
    <>
      <div className="burger-menu">
        <Hamburger toggled={isOpen} toggle={setOpen} id="hamburger-component" distance="sm" color="#35312E" />
        {isOpen ?
          !logged
            ? <div className="overlay">
              <ul >
                <li >
                  <img src={formas1} alt="Forma" style={{ width: "24px" }} />
                  <p onClick={()=>setOpen(!isOpen)}>El programa</p>
                </li>
                <li >
                  <img src={formas3} alt="Forma" style={{ width: "24px" }} />
                  <p onClick={()=>setOpen(!isOpen)}>Testimonios</p>
                </li>
                <li>
                  <img src={formas2} alt="Forma" style={{ width: "24px" }} />
                  <Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }} onClick={()=>setOpen(!isOpen)}>Área miembros</Link>
                </li>
                <li>
                  <img src={formas4} alt="Forma" style={{ width: "24px" }} />
                  <p onClick={()=>setOpen(!isOpen)}>Contacto</p>
                </li>
              </ul>
            </div>
            : <div className="overlay-logged">
              <ul>
                <li>
                  <img src={formas3} alt="Forma" style={{ width: "24px" }} />
                  <p onClick={handleLogout}>Cerrar sesión</p>
                </li>
              </ul>
            </div>
          : ""}
        </div>
        {isOpen ?
          <div className="dark-bg"></div>
          : ""}
      </>
  )}

export default Nav;