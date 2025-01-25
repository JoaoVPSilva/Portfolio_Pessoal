
import './style.css';
import { GrMail } from 'react-icons/gr';
import { FaLinkedin } from 'react-icons/fa6';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import { TbSquareLetterW } from 'react-icons/tb';
import img from './img/img2.png';

function Contato(){
    return (
        <div>         
            <section class="caixa">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 ">                        
                            <img src={img} alt="" id="foto_pessoal"/> 
                        </div>                        
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
                                <a rel='noreferrer' href="https://www.linkedin.com/in/jo%C3%A3o-vitor-pereira-da-silva-84946920a/"class="text-light" style={{textDecoration: 'none'}}>Linkedin</a>                            
                            </div>                           
                            <div>
                                <FaSquareWhatsapp style={{color: "#ecc16c",width:"30px", height: "30px"}}/>
                                &nbsp;&nbsp;&nbsp;
                                <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-pereira-da-silva-84946920a/"class="text-light" style={{textDecoration: 'none'}}>(35) 9 9934-3134</a>                            
                            </div>  
                            <div>
                                <TbSquareLetterW style={{color: "#ecc16c",width:"30px", height: "30px"}}/>
                                &nbsp;&nbsp;&nbsp;
                                <a rel='noreferrer' href="https://www.workana.com/freelancer/de73429727e80ee17817178876a1b0ee"class="text-light" style={{textDecoration: 'none'}}>Workana</a>                            
                            </div>  
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