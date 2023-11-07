// para navegar no header
import { Link } from 'react-router-dom' ;

import './header.css';
import logo_joao from './img/logo3_new.png';

function Header(){        
    return(
       <header class="">
            <img src={logo_joao}/> 
            <div className='menu_header'>
                <Link to="/" class="btn_header">Home</Link>                
                <Link to="/sobre" class="btn_header"> Sobre</Link>                        
                <Link to="/contato" class="btn_header">Contato</Link>            
            </div>
       </header>          
    )
}

export default Header;