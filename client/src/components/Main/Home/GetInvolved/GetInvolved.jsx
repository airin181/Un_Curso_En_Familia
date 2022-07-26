import React from "react";
import arrow_downward from './../../../../assets/arrow_downward.svg';
import formas1 from './../../../../assets/formas1.svg';
import arrow_circle from './../../../../assets/arrow_circle_down.svg';
import family_icon from './../../../../assets/family_restroom.svg';
import {  Link } from "react-router-dom";


const GetInvolved = () => {




  const scrollToNext = () => {
    window.scrollTo({
      top:(0, 0),
      behavior: 'smooth'
    });
  };




  
  return <>
    <section className="general-getinvolved" id="getinvolved">
      <article>

        <div className="title-getinvolved">
          <figure>
            <img src={formas1} alt="shapes icon" style={{ width: "32px", height: "32px" }} />
          </figure>
          <h2 className="text-title-getinvolved">Implícate</h2>
        </div>

        <div className="body-getinvolved">
          <p>Si estás interesado en participar en nuestro programa y ayudar a un menor puedes contactarnos al <mark className="orange" id="telephone-1"><b>+34 633 738 461</b></mark> para obtener más información y resolver tus dudas. </p>
          <p>Si quieres participar en el programa del próximo curso, ¡inscríbete!</p>
          <div className="link-to-more-info">
            <img src={arrow_circle} alt="Arrow with circle" />
          {/*   // eslint-disable-next-line */}
            <a href="#" >Conoce más sobre el proyecto</a>
            
          </div>
        </div>

        <div className="buttons-getinvolved">
        <Link to='/form'><button className="participa-button" id="participate-2"><img src={family_icon} alt="Family icon"/>¡Participa!</button></Link>
        </div>

          <div className="quote-div">
            <p className="quote-text">«Los vínculos no los da la sangre. Conocimos la necesidad de los niños tutelados y nos decidimos por la acogida.»</p>
            <p className="quote-author">- Familia perteneciente al programa</p>
          </div>

      </article>

      <article className="arrow_totop">
        <img src={arrow_downward} alt="Arrow scroll down" className="arrow_downward" onClick={scrollToNext}/>
        <p>Volver arriba</p>
      </article>
    </section>
  </>;
};

export default GetInvolved;