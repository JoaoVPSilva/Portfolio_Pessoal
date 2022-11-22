// para navegar no header
import { Link } from 'react-router-dom' ;

import './style.css';
import logo_joao from './img/logo3.png';
import { render } from 'react-dom';


function Header(){    
    return(
       <header class="sticky-top">
            <img src={logo_joao}/>
            <div className='menu_header'>
                <Link to="/"> <strong>Home</strong></Link>
                <Link to="/sobre"> <strong>Sobre</strong></Link>        
                <Link to="/projeto"> <strong>Projetos</strong></Link>                    
                <Link to="/contato"><strong>Contato</strong></Link>            
            </div>
       </header>
    )
}


export default Header;