import React from "react";
import arrow_downward from './../../../../assets/arrow_downward.svg';
import formas1 from './../../../../assets/formas1.svg';
import arrow_circle from './../../../../assets/arrow_circle_down.svg';
import attach_icon from './../../../../assets/attach_email.svg';
import family_icon from './../../../../assets/family_restroom.svg';

const Program = () => {
  return <>
    <section className="general-program">
      <article className="title-program">
        <figure>
          <img src={formas1} alt="shapes icon" style={{ width: "32px", height: "32px" }} />
        </figure>
        <h2 className="text-title-program">¿En qué consiste el programa?</h2>
      </article>
      <article className="body-program">
        <p>Un <b>Curso en Familia</b> es un programa específico y concreto de acogimiento temporal durante los cursos escolares, en el que participan menores que actualmente crecen en centros residenciales de protección de la Comunidad de Madrid. </p>

        <p>El programa cuenta con una colaboración entre familias y centros de protección, para facilitar una experiencia en familia a los menores que residen en los centros, y ofrecer a ambas partes la oportunidad y experiencia de convivir durante el curso escolar.</p>

        <div className="link-to-more-info">
          <img src={arrow_circle} alt="Arrow with circle" />
          <a href="">Conoce más sobre el proyecto</a>
        </div>
      </article>


<article className="buttons-program">
 
  <button><img src={attach_icon} alt="Attached file icon" /> Programa completo</button>
  <button id="participa-button"><img src={family_icon} alt="Family icon" />¡Participa</button>
 
 
</article>

      <article className="arrow_downward-program">
        <img src={arrow_downward} alt="Arrow scroll down" className="arrow_downward" />
      </article>
    </section>
  </>;
};

export default Program;
