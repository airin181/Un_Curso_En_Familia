import React from "react";
import arrow_downward from './../../../../assets/arrow_downward.svg';
import formas1 from './../../../../assets/formas1.svg';
import arrow_circle from './../../../../assets/arrow_circle_down.svg';
import family_icon from './../../../../assets/family_restroom.svg';
import Popup from "./Popup/Popup";
import { Link } from "react-router-dom";
import { Link as LinkScroll} from 'react-scroll';

const Program = () => {

  

  return <>

    <section className="general-program" id="program">
      <article>

        <div className="title-program">
          <figure>
            <img src={formas1} alt="shapes icon" style={{ width: "32px", height: "32px" }} />
          </figure>
          <h2 className="text-title-program">¿En qué consiste el programa?</h2>
        </div>

        <div className="body-program">
          <p>Un <b>Curso en Familia</b> es un programa específico y concreto de acogimiento temporal durante los cursos escolares, en el que participan menores que actualmente crecen en centros residenciales de protección de la Comunidad de Madrid. </p>
          <p>El programa cuenta con una colaboración entre familias y centros de protección, para facilitar una experiencia en familia a los menores que residen en los centros, y ofrecer a ambas partes la oportunidad y experiencia de convivir durante el curso escolar.</p>
          <div className="link-to-more-info">
            <img src={arrow_circle} alt="Arrow with circle" />
            {/*   // eslint-disable-next-line */}
            <a href="#" id="know-more-about-1">Conoce más sobre el proyecto</a>
          </div>
        </div>

        <div className="buttons-program">
          <Popup id="download-dossier-1" />
          <Link to='/form'><button className="participa-button" id="participate-1"><img src={family_icon} alt="Family icon" />¡Participa!</button></Link>
        </div>

      </article>

      <article className="arrow_downward-program">
        <LinkScroll activeClass="active" to="objectives" spy={true} smooth={true} offset={0} duration={500}>
          <img src={arrow_downward} alt="Arrow scroll down" className="arrow_downward" />
        </LinkScroll>
      </article>
    </section>



  </>;
};

export default Program;
