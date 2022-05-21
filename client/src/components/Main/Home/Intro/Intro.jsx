import React from "react";
import logo from './../../../../assets/Logo.svg';
import arrow_downward from './../../../../assets/arrow_downward.svg';

const Intro = () => {
  return <div className="div-general-intro">
    <img src={logo} alt="Logo Vincula" id="logo-intro" />
    <section className="texts-intro">
      <article className="title">
        <h1 className="h1-b" >Bienvenido a</h1>
        <h1 className="h1-b" style={{ color: "#F0985E" }}>Un Curso en Familia</h1>
      </article>
      <article className="subtext">
        <p>¿Te gustaría cambiar el destino de un menor?</p>
        <p>¡Descubre nuestro proyecto!</p>
        <p className="caption">CURSO 2022/2023</p>
      </article>
    </section>

    <section className="arrow_downward-section">
      <img src={arrow_downward} alt="Arrow scroll down" className="arrow_downward"/>
    </section>


  </div>;
};

export default Intro;
