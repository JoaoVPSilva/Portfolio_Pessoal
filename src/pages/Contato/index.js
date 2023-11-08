
import './style.css';
import { GrMail } from 'react-icons/gr';
<<<<<<< HEAD
import { FaLinkedin } from 'react-icons/fa6';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import { TbSquareLetterW } from 'react-icons/tb';
import img from './img/img2.png';

function Contato(){
    return (
        <div>         
=======
import foto_contato from './img/contato_img.jpg'

function Contato(){
    return (
        
        <div>                        
            <section class='caixa'>
                <div class='container'> 
                    <div class='row'>
                        <div class="col-md-6">
                            <div class="align-self-center" style={{marginTop: ''}}>
                                <p id='text_home2'>Gostou do que viu? Está interessado no meu trabalho? Então entre em contato através das opções abaixo, vamos conversar para ter um trabalho de qualidade com um preço super justo!!</p>
                            </div>                                
                        </div>
                        <div class="col-md-6">
                            <img src={foto_contato} alt="" id="foto_pessoal"/>
                        </div>
                    </div>
                </div>
            </section>
>>>>>>> 636244e5d7cdec7d9b10e1bb9998506346f4616f
            <section class="caixa">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 ">                        
                            <img src={img} alt="" id="foto_pessoal"/> 
                        </div>                        
<<<<<<< HEAD
                        <div class="col-md-6 contatos">        
                        <br/><br/>
                        <br/><br/>                    
                        <h2 class="text-light"><strong>Contatos</strong><hr/></h2>     
                            <br/>                                                   
                            <div>
                                <GrMail style={{color: "#ecc16c",width:"30px", height: "30px"}}/>
                                &nbsp;&nbsp;&nbsp;
                                <a href="mailto:joaovitorps1005@gmail.com"class="text-light" style={{textDecoration: 'none'}}>joaovitorps1005@gmail.com</a>                            
                            </div>    
                            <div>
                                <FaLinkedin style={{color: "#ecc16c",width:"30px", height: "30px"}}/>
                                &nbsp;&nbsp;&nbsp;
                                <a target="_blank" href="https://www.linkedin.com/in/jo%C3%A3o-vitor-pereira-da-silva-84946920a/"class="text-light" style={{textDecoration: 'none'}}>Linkedin</a>                            
                            </div>                           
                            <div>
                                <FaSquareWhatsapp style={{color: "#ecc16c",width:"30px", height: "30px"}}/>
                                &nbsp;&nbsp;&nbsp;
                                <a href=""class="text-light" style={{textDecoration: 'none'}}>(35) 9 9934-3134</a>                            
                            </div>  
                            <div>
                                <TbSquareLetterW style={{color: "#ecc16c",width:"30px", height: "30px"}}/>
                                &nbsp;&nbsp;&nbsp;
                                <a target="_blank" href="https://www.workana.com/freelancer/de73429727e80ee17817178876a1b0ee"class="text-light" style={{textDecoration: 'none'}}>Workana</a>                            
                            </div>  
=======
                        <div class="col-md-4 contatos">                            
                            <h2 class='text-light'><strong>Telefone</strong><hr/></h2>
                            <p>(35) 9 9934-3134</p>
                        </div>

                        <div class="col-md-4 contatos">                            
                            <h2 ><strong>Redes Sociais</strong><hr/></h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
>>>>>>> 636244e5d7cdec7d9b10e1bb9998506346f4616f
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