import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './styles/styles.scss'
import Form from "./components/Main/Home/Form";

function App() {
    return (
        <div>
            {/*<BrowserRouter>*/}
            {/*    <Header/>*/}
            {/*    <Main/>*/}
            {/*</BrowserRouter>*/}
            {/*<Footer/>*/}
            <Form/>
        </div>
    );
}

export default App;