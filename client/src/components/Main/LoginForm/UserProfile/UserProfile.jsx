import React from "react";

const UserProfile = () => {
  return (
    <section>
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
    </section>
  )
};

export default UserProfile;
