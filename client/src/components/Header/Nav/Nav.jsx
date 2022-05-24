import React, { useState } from "react";
import Hamburger from 'hamburger-react'
import formas1 from './../../../assets/formas1.svg';
import formas2 from './../../../assets/formas2.svg';
import formas3 from './../../../assets/formas3.svg';
import formas4 from './../../../assets/formas4.svg';

import { Link } from 'react-router-dom';




const Nav = () => {
  const [isOpen, setOpen] = useState(false)

  return (<>


    <div className="burger-menu">
      <Hamburger toggled={isOpen} toggle={setOpen} id="hamburger-component" distance="sm" color="#35312E"/>
      {isOpen ?
        <div className="overlay">
          <ul >
            <li>
              <img src={formas1} alt="Forma" style={{width:"24px"}}/>
              <p>El programa</p>
            </li>
            <li>
              <img src={formas2} alt="Forma" style={{width:"24px"}}/>
              <p>Testimonios</p>
            </li>
            <li>
              <img src={formas3} alt="Forma" style={{width:"24px"}}/>
              <Link to='/login'>Área de miembros</Link>
            </li>
            <li>
              <img src={formas4} alt="Forma" style={{width:"24px"}}/>
              <p>Contacto</p>
            </li>
    
          </ul>
        </div> : ""}
        
    </div>
    {isOpen ?
    <div className="dark-bg"></div>
  : ""}
  </>

  )
};

export default Nav;

{/*   <Link to='/#'>El programa</Link>
  <Link to='/#'>Testimonios</Link>
  <Link to='/area-miembros'>Área miembros</Link>
  <Link to='/#'>Contacto</Link>  */}