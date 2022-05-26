import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import LoginForm from './LoginForm/LoginForm';
import UserProfile from "./LoginForm/UserProfile/UserProfile";
import Form from "./Home/Form/Form";


const Main = () => {
  return <main style={{ overflow: "hidden", position: "relative" }}>
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<LoginForm />} path='/login' />
      <Route element={<UserProfile />} path='/profile' />
      <Route element={<Form />} path='/form' />

    </Routes>
  </main>;
};

export default Main;