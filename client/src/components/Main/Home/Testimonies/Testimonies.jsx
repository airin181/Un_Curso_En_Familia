import React, { useState } from "react";
import formas4 from './../../../../assets/formas4.svg';
import arrow_downward from './../../../../assets/arrow_downward.svg';
import img_video_1 from './../../../../assets/ph1.jpg';
import img_video_2 from './../../../../assets/ph2.jpg';
import img_video_3 from './../../../../assets/ph3.jpg';
import img_video_4 from './../../../../assets/ph4.jpg';
import screenshot from './../../../../assets/screenshot.png';
import Card from './Card/Card'
import arrow_circle from './../../../../assets/arrow_circle_down.svg';
import { Link } from 'react-scroll';

const Testimonies = () => {

  //====================
  //** Estados: **
  //====================

  const [main, setMain] = useState("https://www.youtube.com/embed/0qX3UWsmc-8");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState(true);



  //====================
  //** Funciones: **
  //====================



  //si se hace click en una de las imágenes, el estado video pasa a false y se muestra imagen en grande
  const imageClick = (e) => {
    setImage(e)
    setVideo(false)
  }

  //al revés que arriba
  const handleVideoOnClick = () => {
    setVideo(true)
    setImage("")
  }

  //flecha que hace scroll hasta la siguiente sección
  const scrollToNext = () => {
    window.scrollTo({
      top: (0, 3300),
      behavior: 'smooth'
    });
  };



  const arrayPrejudices = [
    {
      id: 1,
      front: "¿Qué sucede si el menor tiene antecedentes familiares?",
      back: "El objetivo de esta acción es que el menor pueda volver con su familia, por lo que sus antecedentes son parte de la historia del menor."
    },
    {
      id: 2,
      front: "¿Tienes que ser rico para poder acoger?",
      back: "No hay que ser millonario ni superhéroe, pero sí saber qué niño puedes acoger. Generalmente son familias de nivel medio."
    },
    {
      id: 3,
      front: "¿Qué sucede si el menor tiene problemas de conducta?",
      back: "Los menores si están en un ambiente estable, con rutinas, normas y afecto, responderán correctamente a todas las interacciones con su entono."
    },
    {
      id: 4,
      front: "¿Qué sucede si el menor tiene antecedentes familiares?",
      back: "El objetivo de esta acción es que el menor pueda volver con su familia, por lo que sus antecedentes son parte de la historia del menor."
    },
    {
      id: 5,
      front: "¿Tienes que ser rico para poder acoger?",
      back: "No hay que ser millonario ni superhéroe, pero sí saber qué niño puedes acoger. Generalmente son familias de nivel medio."
    },
    {
      id: 6,
      front: "¿Qué sucede si el menor tiene problemas de conducta?",
      back: "Los menores si están en un ambiente estable, con rutinas, normas y afecto, responderán correctamente a todas las interacciones con su entono."
    },
    {
      id: 7,
      front: "¿Qué sucede si el menor tiene antecedentes familiares?",
      back: "El objetivo de esta acción es que el menor pueda volver con su familia, por lo que sus antecedentes son parte de la historia del menor."
    },
    {
      id: 8,
      front: "¿Tienes que ser rico para poder acoger?",
      back: "No hay que ser millonario ni superhéroe, pero sí saber qué niño puedes acoger. Generalmente son familias de nivel medio."
    },
    {
      id: 9,
      front: "¿Qué sucede si el menor tiene problemas de conducta?",
      back: "Los menores si están en un ambiente estable, con rutinas, normas y afecto, responderán correctamente a todas las interacciones con su entono."
    }
  ]

  //por cada objeto del array (prejuicio) sacamos una Card
  const paintCards = () => {
    return arrayPrejudices.map((item, i) => <Card data={item} key={i} />)
  }



  //====================
  //** RETURN: **
  //====================


  return <section className="general-testimonies" id="testimonies">

    <article style={{ width: "100%" }}>

      <div className="title-testimonies">
        <figure>
          <img src={formas4} alt="shapes icon" style={{ width: "32px", height: "32px" }} />
        </figure>
        <h2 className="text-title-testimonies">Testimonios</h2>
      </div>


      <div className="video-container">
        {video ? <iframe src={main} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen id="youtube-video"></iframe> : ""}
        {image ? <img src={image} alt="Testimonio" style={{ width: "100%", maxWidth: "500px" }} /> : ""}
      </div>

      <div className="testimonies-img" >
        <div className="circular--landscape" >
          <img src={img_video_1} alt="Miniatura video testimonio" onClick={(e) => imageClick(e.target.src)} />
        </div>
        <div className="circular--landscape">
          <img src={img_video_2} alt="Miniatura video testimonio" onClick={(e) => imageClick(e.target.src)} />
        </div>
        <div className="circular--landscape">
          <img src={img_video_3} alt="Miniatura video testimonio" onClick={(e) => imageClick(e.target.src)} />
        </div>
        <div className="circular--landscape">
          <img src={img_video_4} alt="Miniatura video testimonio" onClick={(e) => imageClick(e.target.src)} />
        </div>
        <div className="circular--landscape">
          <img src={screenshot} onClick={() => handleVideoOnClick()} alt="video ASEAF"></img>
        </div>
      </div>

      <div className="link-to-more-info" id="link-to-more-info-testimonies">
        <img src={arrow_circle} alt="Arrow with circle" />
        <a href="" id="know-more-testimonies">Conoce más Testimonios</a>
      </div>

      <div className="cards-testimonies">
        <div className="scrolling-wrapper">
          {paintCards()}
        </div>
        <article className="arrow_downward-testimonies">
          <Link activeClass="active" to="getinvolved" spy={true} smooth={true} offset={0} duration={500}>
            <img src={arrow_downward} alt="Arrow scroll down" className="arrow_downward" />
          </Link>        </article>

      </div>



    </article>



  </section>

};

export default Testimonies;
