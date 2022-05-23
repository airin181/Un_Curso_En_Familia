import React from "react";
import formas2 from './../../../../assets/formas1.svg';
import arrow_downward from './../../../../assets/arrow_downward.svg';
import illustration1 from './../../../../assets/illustration1.svg';

const Objectives = () => {
  return <>
    <section className="general-objectives">


      <article className="title-objectives">
        <figure>
          <img src={formas2} alt="shapes icon" style={{ width: "32px", height: "32px" }} />
        </figure>
        <h2 className="text-title-objectives">Nuestros objetivos</h2>
      </article>

      <article className="card-objectives">
        <div className="card-1">
          <img src={illustration1} alt="ilustration" />
          <p>Aumentar la red de apoyo de los menores en acogimiento residencial</p>

        </div>
      </article>

      <article className="arrow_downward-objectives">
        <img src={arrow_downward} alt="Arrow scroll down" className="arrow_downward" />
      </article>
    </section>
  </>;
};

export default Objectives;
