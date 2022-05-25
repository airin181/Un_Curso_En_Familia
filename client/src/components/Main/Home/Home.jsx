import React from "react";
import Intro from './Intro/Intro';
import Objectives from "./Objectives/Objectives";
import Program from './Program/Program'
import Testimonies from './Testimonies/Testimonies'
import GetInvolved from './GetInvolved/GetInvolved'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import paula from ''


const theme = {
  background: '#FFFFF',
  fontFamily: 'Poppins',
  headerBgColor: '#BDD2C2',
  headerFontColor: '#35312E',
  headerFontSize: '20px',
  botBubbleColor: '#FEF2DF',
  botFontColor: '#35312E',
  userBubbleColor: '#fff',
  userFontColor: '#35312E',
  /* botAvatar:{paula}, */
  headerTitle: 'Asistente Virtual',
  placeholder: 'Selecciona una opción',
  hideSubmitButton: true,
};





const Home = () => {
  return <>

    <Intro />
    <Program />
    <Objectives />
    <Testimonies />
    <GetInvolved />

    <ThemeProvider theme={theme}>


      <ChatBot
        steps={[
          {
            id: '1',
            message: '¡Hola! Soy Paula, tu asistente virtual de Un Curso en Familia, ¿en qué puedo ayudarte? 💬',
            trigger: '2',

          },
          {
            id: '2',
            options: [
              { value: 1, label: '¿Cuándo se celebra?', trigger: '3' },
              { value: 2, label: '¿En qué consiste?', trigger: '4' },
              { value: 3, label: '¿Quién puede participar?', trigger: '5' },
              { value: 4, label: '¿A qué menores va dirigido?', trigger: '6' },
              { value: 5, label: '¿Qué debo saber?', trigger: '7.1' },
            ],

          },
          {
            id: '3',
            message: 'Con carácter anual, de septiembre a julio.',
            trigger: '9',

          },
          {
            id: '4',
            message: 'Es un programa coordinado y gestionado por la Dirección General de Infancia, Familias y Fomento de la Natalidad y las asociaciones de familias acogedoras de la Comunidad de Madrid (ASEAF, ADAMCAM y Familias Para la Acogida), con la colaboración de la Fundación Soñar Despierto. El objetivo es facilitar una experiencia en familia a los menores que residen en los centros y ofrecer a menores y familias, la oportunidad y experiencia de convivir durante el próximo curso escolar.',
            trigger: '9',

          },
          {
            id: '5',
            message: 'Cualquier persona o familia, con o sin hijos, dispuesta a abrir su hogar durante un curso escolar y ofrecer un clima de convivencia familiar en un entorno normalizado y estable a un o una menor que vive en un centro de acogida.',
            trigger: '9',

          },
          {
            id: '6',
            message: 'El programa va dirigido a niños, niñas y adolescentes de entre 6 y 17 años que viven en alguno de los centros de protección a la infancia de la Comunidad de Madrid.',
            trigger: '9',

          },
          {
            id: '7.1',
            message: '1. Los y las menores participantes mantendrán su centro educativo durante el curso escolar por lo que la persona o familia acogedora deberá vivir en un entorno próximo al mismo.',
            trigger: '7.2',

          },
          {
            id: '7.2',
            message: '2. El o la menor continuará con las visitas que estuviera manteniendo hasta el momento con su familia biológica. Estas visitas se llevarán a cabo en el centro de protección de referencia del menor, normalmente por la tarde, por lo que se requiere cierta disponibilidad para poder llevar al niño, niña o adolescente a las mismas.',
            trigger: '7.3',

          },
          {
            id: '7.3',
            message: '3. El ofrecimiento de la persona o familia y su posterior idoneidad no garantiza la asignación de un o una menor. Esto estará supeditado al número de menores que propongan las residencias para participar en el programa. Se valorarán las características de todas las familias que se hayan ofrecido para asignar a cada menor la familia que mejor pueda cubrir sus necesidades.',
            trigger: '9',

          },

          {
            id: '9',
            message: '¡Espero haber resuelto tu duda! ¿Aún quieres saber más?',
            trigger: '10',

          },
          {
            id: '10',
            options: [
              { value: 6, label: '¡No, eso era todo!', trigger: '11' },
              { value: 1, label: '¿Cuándo se celebra?', trigger: '3' },
              { value: 2, label: '¿En qué consiste?', trigger: '4' },
              { value: 3, label: '¿Quién puede participar?', trigger: '5' },
              { value: 4, label: '¿A qué menores va dirigido?', trigger: '6' },
              { value: 5, label: '¿Qué debo saber?', trigger: '7.1' },
            ],
          },
          {
            id: '11',
            message: 'Agradecemos que te hayas interesado por Un Curso en Familia. ¡Esperamos verte pronto!',
            end: true,

          },
        ]}
      />
    </ThemeProvider>



  </>
};

export default Home;