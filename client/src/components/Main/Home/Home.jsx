import React from "react";
import Intro from './Intro/Intro';
import Objectives from "./Objectives/Objectives";
import Program from './Program/Program'
import Testimonies from './Testimonies/Testimonies'
import GetInvolved from './GetInvolved/GetInvolved'
import ThemedExample from './Chatbot/Chatbot'


const Home = () => {
  return <>

    <Intro />
    <Program />
    <Objectives />
    <Testimonies />
    <GetInvolved />
    <ThemedExample/>
  </>
    ;
};

export default Home;
