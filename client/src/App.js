import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './styles/styles.scss'
import TagManager from 'react-gtm-module'


import { LoginContext } from './context/loginContext';
import { useState } from 'react';


function App() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState("");
  const value = {
    logged,
    setLogged,
    user,
    setUser
  }

  //GOOGLE TAG MANAGER
  const tagManagerArgs = {
      gtmId: 'GTM-P3NX7PZ'
  }
  
  TagManager.initialize(tagManagerArgs)



  return (
    <div>
      <BrowserRouter>
        <LoginContext.Provider value={value}>
          <Header />
          <Main />
        </LoginContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;