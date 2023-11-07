
import './style.css';
import { GrMail } from 'react-icons/gr';

function Contato(){
    return (
        
        <div>                        
            <section class="caixa">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 ">                        
                            <h2 class="text-light"><strong>E-mail</strong><hr/></h2>                            
                            <GrMail style={{color: "#ecc16c",width:"30px", height: "30px"}}/>
                            &nbsp;&nbsp;&nbsp;
                            <a href="mailto:joaovitorps1005@gmail.com"class="text-light" style={{textDecoration: 'none'}}>joaovitorps1005@gmail.com</a>
                            
                        </div>                        
                        <div class="col-md-4 contatos">                            
                            <h2><strong>Telefone</strong><hr/></h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>

                        <div class="col-md-4 contatos">                            
                            <h2><strong>Redes Sociais</strong><hr/></h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                    </div>
                </div>
            </section>   
            <br/><br/><br/><br/>      
            <br/><br/>
        </div>
    );
}

export default Contato;