import React, { useState } from "react";
import formas4 from './../../../../assets/formas4.svg';
import arrow_downward from './../../../../assets/arrow_downward.svg';
import img_video_1 from './../../../../assets/ph1.jpg';
import img_video_2 from './../../../../assets/ph2.jpg';
import img_video_3 from './../../../../assets/ph3.jpg';
import img_video_4 from './../../../../assets/ph4.jpg';
import screenshot from './../../../../assets/screenshot.png';

const Testimonies = () => {


  const [main, setMain] = useState("https://www.youtube.com/embed/0qX3UWsmc-8");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState(true);


  const imageClick = (e) => {
    setImage(e)
    setVideo(false)
  }

  const handleVideoOnClick = () => {
    setVideo(true)
    setImage("")
  }

  return <section className="general-testimonies">

    <article style={{ width: "100%" }}>

      <div className="title-testimonies">
        <figure>
          <img src={formas4} alt="shapes icon" style={{ width: "32px", height: "32px" }} />
        </figure>
        <h2 className="text-title-testimonies">Testimonios</h2>
      </div>


      <div className="video-container">
        {video ? <iframe src={main} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : ""}
        {image ? <img src={image} alt="Testimonio" style={{width: "100%"}}/> : ""}
      </div>

      <div className="testimonies-img">
        <div className="circular--landscape">
          <img src={img_video_1} alt="Miniatura video testimonio" onClick={(e) => imageClick(e.target.src)} className="circular--portrait" />
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
      <img src={screenshot} onClick={() => handleVideoOnClick()}></img>
       </div>
      </div>




    </article>

    <article className="arrow_downward-testimonies">
      <img src={arrow_downward} alt="Arrow scroll down" className="arrow_downward" />
    </article>

  </section>

};

export default Testimonies;
