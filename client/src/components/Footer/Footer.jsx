import React, {useState} from "react";

const Footer = () => {



  return <div className="general-footer">

    <section className="footer-text">
      <p>CONTACTA CON NOSOTROS</p>
      <p className=".footer-small-text">aseaf@aseaf.org</p>
      <a href="tel:+34633738461" className=".footer-small-text">+ 34 633 738 461</a>
      <a href="www.aseaf.org" className=".footer-small-text">www.aseaf.org</a>
    </section>

    <section>
      <p>RECIBE NUESTRA NEWSLETTER</p>
        <input name="email" id="email-dossier" placeholder="Introduce tu email" />
    </section>

    <section className="rrss-icons">
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
    </section>

    <section>
      <p>© 2022 Programa estatal de acogimiento familiar</p>
      <span>
        <a href="">Aviso legal</a>
        <a href="">Política de privacidad</a>
        <a href="">Política de cookies</a>
      </span>
    </section>




  </div>;

};

export default Footer;
