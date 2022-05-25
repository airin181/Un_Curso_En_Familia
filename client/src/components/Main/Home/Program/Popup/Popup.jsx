import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import attach_icon from './../../../../../assets/attach_email.svg';
import iconSent from './../../../../../assets/sent.svg'; 




const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 320,
  bgcolor: '#FEFEFC',
  borderRadius: '25px',
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
  p: 2.25,
};



const Popup = () => {


  //====================
  //** Estados: **
  //====================

  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const [emailTyped, setEmailTyped] = useState("");

  const [invalidEmailMessage, setInvalidEmailMessage] = useState(false);




  //====================
  //** Funciones: **
  //====================

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const handleInputChange = (event) => {
    // console.log(event.target.name)
    setEmailTyped(event.target.value)
  }


  const handleSubmit = () => {

    if (emailRegexp.test(emailTyped)) {
      setSent(true)
      setInvalidEmailMessage(false)
      console.log("email válido");

    } else {
      setInvalidEmailMessage(true)
    }
  }



  //====================
  //** RETURN: **
  //====================

  return (
    <div>
      <button onClick={handleOpen}><img src={attach_icon} alt="Attached file icon" /> Programa completo</button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>


          <section className="section-close-btn">
            <span className="close-btn" onClick={handleClose}>&times;</span>
          </section>

          {!sent ? <>
       
            <div>
              <div id="hubspotForm"></div>
            </div>
            <section className="content-modal">
              <h3 className="h3-modal">Introduce tu email y te enviaremos el dossier del programa completo</h3>

              <article>
                <input name="email" id="email-dossier" placeholder="Introduce tu email" onChange={handleInputChange} />
                {invalidEmailMessage ? <p className="error-msg">E-mail inválido</p> : ""}
              </article>

              <button className="getInvolved-button" onClick={e => handleSubmit(e)}>Enviar</button>
            </section>
          </>
            :
            <section className="content-modal">
              <img src={iconSent} alt="Dossier enviado icono" />
              <h3 className="h3-modal" id="h3-sent">Dossier enviado.</h3>
              <h3 className="h3-modal" id="h3-checkInbox">Revisa tu bandeja de entrada.</h3>
              <h3 className="h3-modal">¡Gracias por implicarte!</h3>
            </section>
          }


        </Box>
      </Modal>
    </div >
  );
}
export default Popup;
