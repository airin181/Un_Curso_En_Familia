import React from "react";
import Intro from './Intro/Intro';
import Objectives from "./Objectives/Objectives";
import Program from './Program/Program';
import Testimonies from './Testimonies/Testimonies';
import GetInvolved from './GetInvolved/GetInvolved';

import ChatBot from 'react-simple-chatbot';


const theme = {
  background: '#',
  fontFamily: 'Poppins',
  headerBgColor: '#BDD2C2',
  headerFontColor: '#35312E',
  headerFontSize: '20px',
  botBubbleColor: '#FEF2DF',
  botFontColor: '#35312E',
  userBubbleColor: '#fff',
  userFontColor: '#35312E',
};
 


 

const Home = () => {
  return <>

    <Intro />
    <Program />
    <Objectives />
    <Testimonies />
    <GetInvolved />
  </>
};

export default Home;