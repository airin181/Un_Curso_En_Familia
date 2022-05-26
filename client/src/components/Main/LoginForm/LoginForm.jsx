import React, { useContext } from "react";
import { LoginContext } from "../../../context/loginContext";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import pass_icon from "../../../assets/password.svg";

const LoginForm = () => {

  const { logged, setLogged, user, setUser } = useContext(LoginContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const values = {
      email: data.email,
      password: data.password
    };

    const response = await axios.post(process.env.REACT_APP_LOGIN_URL, values);
    const loginResponse = response.data;

    if (loginResponse.msg === "Authenticated correctly!") {
      setLogged(true)
      setUser(data.email)
    }
  };

  const handleLoggedState = () => {
    return logged ? <Navigate to='/profile' /> : "";
  };

  return (
    <>
      <div className="login">
        <h1 className="login__title">Área miembros</h1>
        <p className="login__p">Acceso limitado a los miembros</p>
        <p className="login__p">inscritos en el programa</p>
      </div>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="login__container-email">
          <label className="login__form-label">Email</label>
          <input className="login__form-textinput" type="email" {...register("email")} name="email" placeholder="Introduce tu email" required />
        </div>
        <div className="login__container-password">
          <label className="login__form-label">Contraseña</label>
          <input className="login__form-textinput" type="password" name="password" autoComplete="on" {...register("password")} placeholder="Password" required />
        </div>
        <p className="login__form-forgot">¿Olvidaste tu contraseña? <a className="login__form-forgot-recover" href="#"> Recuperar </a> </p>
        <input className="login__form-submit" type="submit" value="Acceder" />
      </form>
      {handleLoggedState()}
    </>
  )
};

export default LoginForm;
