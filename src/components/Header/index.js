// para navegar no header
import { Link } from 'react-router-dom' ;

import './style.css';
import logo_joao from './img/logo3.png';
import { render } from 'react-dom';


function Header(){    
    return(
       <header class="">
            <img src={logo_joao}/>
            <div className='menu_header'>
                <Link to="/" class="btn_header">Home</Link>                
                <Link to="/sobre" class="btn_header"> Sobre</Link>        
                <Link to="/projeto" class="btn_header"> Projetos</Link>                    
                <Link to="/contato" class="btn_header">Contato</Link>            
            </div>
       </header>
   
       
    )
}


export default Header;