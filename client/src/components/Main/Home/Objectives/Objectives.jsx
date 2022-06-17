import React from "react";
import formas3 from './../../../../assets/formas1.svg';
import arrow_downward from './../../../../assets/arrow_downward.svg';
import illustration1 from './../../../../assets/illustration1.svg';
import illustration2 from './../../../../assets/illustration2.svg';
import illustration3 from './../../../../assets/illustration3.svg';
import illustration4 from './../../../../assets/illustration4.svg';
import { Link } from 'react-scroll';

const Objectives = () => {


  //====================
  //** Funciones: **
  //====================



  return <>
    <section className="general-objectives" id="objectives">
      <article style={{ width: "100%" }}>

        <div className="title-objectives">
          <figure>
            <img src={formas3} alt="shapes icon" style={{ width: "32px", height: "32px" }} />
          </figure>
          <h2 className="text-title-objectives">Nuestros objetivos</h2>
        </div>

        <div className="cards-objectives">

          <div className="card-1">
            <figure><img src={illustration1} alt="ilustration" /></figure>
            <div><p>Aumentar la red de apoyo de los menores en acogimiento residencial</p></div>
          </div>

          <div className="card-2">
            <div><p>Facilitar a las familias interesadas el apoyo de los profesionales del centro de protección</p></div>
            <img src={illustration2} alt="ilustration" />
          </div>

          <div className="card-1">
            <figure><img src={illustration4} alt="ilustration" /></figure>
            <div style={{ position: "relative", right: "26px", gap: "0" }}><p>Facilitar la adaptación a la vida en familia de los niños, niñas y adolescentes</p></div>
          </div>

          <div className="card-2">
            <div><p>Impulsar el acogimiento familiar como medida de protección prioritaria a la infancia tutelada</p></div>
            <img src={illustration3} alt="ilustration" style={{ height: "52px", width: "63px", right: "2em", top: "0em" }} />

          </div>
        </div>

      </article>


      <article className="arrow_downward-objectives">
        <Link activeClass="active" to="testimonies" spy={true} smooth={true} offset={0} duration={500}>
          <img src={arrow_downward} alt="Arrow scroll down" className="arrow_downward" />
        </Link>
      </article>
    </section>
  </>;
};

export default Objectives;