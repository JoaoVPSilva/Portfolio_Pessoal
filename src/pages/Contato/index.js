import { Link } from 'react-router-dom';
import './style.css';


function Contato(){
    return (
        <div>
            <br/><br/><br/><br/>
            <span>Deseja fazer um orçamento? Ou Deseja saber mais sobre?</span>
            <br/><br/><br/><br/>
            <section class="caixa">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 ">                        
                            <h2 class="text-light"><strong>E-mail</strong><hr/></h2>
                            <p >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
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