import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from './Home/Home'


const Main = () => {
  return <div>
    <Routes>
    <Route element={<Home/>} path='/'/>
       </Routes>
  </div>;
};

export default Main;
