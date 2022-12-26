import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Header from './components/Header';
import Contato from './pages/Contato';
import Projetos from './pages/Projetos';

function RoutesApp(){

    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/sobre" element={ <Sobre/> } />
                <Route path="/contato" element={ <Contato/> } />
                <Route path="/projeto" element={ <Projetos/> } />
            </Routes>
        </BrowserRouter>
    )

}

export default RoutesApp;
