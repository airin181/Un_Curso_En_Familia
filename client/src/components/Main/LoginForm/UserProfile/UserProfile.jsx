import React, { useContext } from "react";
import { LoginContext } from "../../../../context/loginContext";
import { Navigate } from "react-router-dom";
import userImg from "./../../../../assets/userImg.jpg"

const UserProfile = () => {

  const { logged, setLogged, user, setUser } = useContext(LoginContext);

  return (
    <section>
      {
        !logged ? <Navigate to='/' /> : <>

          <article className="user-details">
            <div>

              <div className="circular--landscape">
                <img src={userImg} alt="user" className="user__img" />
              </div>

              <h1 className="user__name">
                Pedro del Olmo
              </h1>
              <h3 className="user__year">
                CURSO 2022/2023
              </h3>
            </div>
            <div>
              <p>Colegio Pablo Neruda</p>
              <p>23 miembros</p>
            </div>
          </article>



          <article className="user-options">
            <div className="options__calendar">
              <img src="" alt="calendario" />
              <h2>Calendario</h2>
            </div>
            <div className="options__chat">
              <img src="" alt="chat" />
              <h2>Chat</h2>
            </div>
            <div className="options__tracking">
              <img src="" alt="seguimiento" />
              <h2>Seguimiento</h2>
            </div>
            <div className="options__settings">
              <img src="" alt="" />
              <h2>Ajustes</h2>
            </div>
          </article>
          <article>
            <div className="circle-1-profile"></div>
            <div className="circle-2-profile"></div>
            <div className="circle-3-profile"></div>
            <div className="circle-4-profile"></div>
            <div className="circle-5-profile"></div>
          </article>
        </>
      }

    </section>
  )

};


export default UserProfile;
