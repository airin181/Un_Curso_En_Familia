import React, { useContext } from "react";
import { LoginContext } from "../../../context/loginContext";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const LoginForm = () => {

  const { logged, setLogged, user, setUser } = useContext(LoginContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {

    const values = {
      email: data.email,
      password: data.password
    };

    const response = await axios.post("https://vincula-back.herokuapp.com/login", values);
    const loginResponse = response.data;

    if (loginResponse.msg === "Authenticated correctly!") {
      setLogged(true)
      setUser(data.email)
    };

    console.log(values);
  };

  const handleLoggedState = () => {
    return logged ? <Navigate to='/profile'/> : "";
  };

  return (
    <>
      <div>
        <h1>Área miembros</h1>
        <p>Acceso limitado a los miembros</p>
        <p>inscritos en el programa</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input type="email" {...register("email")} name="email" placeholder="Introduce tu email" required />
        <label>Contraseña</label>
        <input type="password" name="password" autoComplete="on" {...register("password")} placeholder="Password" required />
        <p>¿Olvidaste tu contraseña? Recuperar</p>
        <input type="submit" value="Acceder" />
      </form>
      {handleLoggedState()}
    </>
  )
};

export default LoginForm;
