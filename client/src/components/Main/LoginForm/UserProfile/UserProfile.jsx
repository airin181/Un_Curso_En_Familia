import React, { useContext } from "react";
import { LoginContext } from "../../../../context/loginContext";
import { Navigate } from "react-router-dom";

const UserProfile = () => {

  const { logged, setLogged, user, setUser } = useContext(LoginContext);

  return (
    <section>
<<<<<<< HEAD
      <article className="user-details">
        <div>
          <img src="" alt="user" className="user__img" />
          <h1 className="user__name">
            Nombre y apellidos
          </h1>
          <h3 className="user__year">
            CURSO 2022/2023
          </h3>
        </div>
        <div>
          <p>Colegio</p>
          <p>Número de miembros</p>
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
=======
      {
        !logged ? <Navigate to='/' /> : <>
          <article className="user">
            <div>
              <img src="" alt="user" className="user__img" />
              <h1 className="user__name">
                Nombre y apellidos
              </h1>
              <h3 className="user__year">
                CURSO 2022/2023
              </h3>
            </div>
            <div>
              <p>Colegio</p>
              <p>Número de miembros</p>
            </div>
          </article>
          <article className="options">
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
        </>
      }

>>>>>>> develop
    </section>
  )

};


export default UserProfile;
