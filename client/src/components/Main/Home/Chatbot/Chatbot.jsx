import React from 'react';
import { ThemeProvider } from 'styled-components';
/* import ChatBot from '../../lib/index';
 */import ChatBot from 'react-simple-chatbot';


// all available props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const data = [

    {
      id: '1',
      message: 'Hello World!',
      trigger: '2'
    },
    {
      id: '2',
      message: 'eeeehhhhhhhhhh tuuuuuuu',
      trigger: '3'
      
    },  
      {
      id: '3',
      message: 'Adios',
      end: true
    },
]

const Chatbot = () => (

    <ChatBot steps={data} theme={theme}/>
  
)

export default Chatbot;