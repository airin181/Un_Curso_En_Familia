import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import LoginForm from './LoginForm/LoginForm';
import UserProfile from "./LoginForm/UserProfile/UserProfile";
import Form from "./Home/Form/Form";

import ScrollToTop from "../ScrollToTop";


const Main = () => {
  return <main style={{ overflow: "hidden", position: "relative" }}>
    <ScrollToTop>
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<LoginForm />} path='/login' />
      <Route element={<UserProfile />} path='/profile' />
      <Route element={<Form />} path='/form' />
    </Routes>
    </ScrollToTop>
  </main>;
};

export default Main;