import React, { useState } from "react";
import twitter from "./../../assets/twitter.svg";
import facebook from "./../../assets/facebook.svg";
import youtube from "./../../assets/youtube.svg";
import linkedin from "./../../assets/linkedin.png";

const Footer = () => {



  return <div className="general-footer">

    <section className="footer-text">
      <p className="footer-bold-text">CONTACTA CON NOSOTROS</p>
      <a href="mailto:aseaf@aseaf.org" className="footer-small-text" id="email">aseaf@aseaf.org</a>
      <a href="tel:+34633738461" className="footer-small-text" id="telephone">+ 34 633 738 461</a>
      <a href="https://s829792836.websitebuilder.online/" className="footer-small-text" id="web-address" target="_blank">www.aseaf.org</a>
    </section>

    <section>
      <p className="footer-bold-text">RECIBE NUESTRA NEWSLETTER</p>
      <input name="email" id="email-dossier-footer" placeholder="Introduce tu email" />
    </section>

    <section className="rrss-icons">
      
      <a href="https://www.facebook.com/Aseaf_isn-107303130672570/" id="facebook"><img src={facebook} alt="Facebook icon" style={{width:"24px"}} /></a>
      <a href="https://www.linkedin.com/company/aseaf-asociaci%C3%B3n-estatal-de-acogimiento-familiar/" id="linkedin"><img src={linkedin} alt="Linkedin icon" style={{width:"24px"}}/></a>
      <a href="https://twitter.com/aseaf_isn" id="twitter"><img src={twitter} alt="Twitter icon" style={{width:"24px"}}/></a>
      <a href="https://www.youtube.com/channel/UCeSmi5FQ15mRUFxNj97eQQw" id="youtube"><img src={youtube} alt="Youtube icon" style={{width:"24px"}}/></a>
      
    </section>

    <section className="legals-texts">
      <p>© 2022 Programa estatal de acogimiento familiar</p>
      <span>
        <a href="https://drive.google.com/file/d/1QpCzbRURVTxcMKM72qnOtyNO_GIjD76U/view" target="_blank">Aviso legal</a>
        <a href="https://drive.google.com/file/d/14m1YqFJxezRneMqdolO84sm-o4h4pMAK/view" target="_blank">Política de privacidad</a>
        <a href="https://drive.google.com/file/d/1oJkKIFvLVL6dzPyLvGXswP-QoOw83_Dc/view" target="_blank">Política de cookies</a>
      </span>
    </section>




  </div>;

};

export default Footer;
