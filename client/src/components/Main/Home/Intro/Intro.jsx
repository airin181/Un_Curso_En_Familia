import React from "react";
import arrow_downward from './../../../../assets/arrow_downward.svg';
import logo from './../../../../assets/Logo.svg';


const Intro = () => {



  const scrollToNext = () => {
    window.scrollTo({
      top: (0, 816),
      behavior: 'smooth'
    });
  };


  return <section className="general-intro">

    <article>
      <article className="texts-intro">
        <img src={logo} alt="logo un curso en familia" />
        <div className="title">
          <h1 className="h1-b" style={{ color: "#596B61" }}>¡Bienvenido a</h1>
          <h1 className="h1-b" style={{ color: "#596B61" }}>Un Curso en Familia!</h1>
        </div>
        <div className="subtext">
          <p>¿Te gustaría cambiar el destino de un menor?</p>
          <p>¡Descubre nuestro proyecto!</p>
          <p className="caption" id="academic-term">CURSO 2022/2023</p>
        </div>
      </article>
      <article>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="circle-4"></div>
        <div className="circle-5"></div>
      </article>
    </article>

    <article className="arrow_downward-intro" onClick={scrollToNext}>
      <img src={arrow_downward} alt="Arrow scroll down" className="arrow_downward" />
    </article>

  </section>;
};

export default Intro;
