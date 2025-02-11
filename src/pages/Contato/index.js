
import './style.css';
import { GrMail } from 'react-icons/gr';
import { FaLinkedin } from 'react-icons/fa6';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import { FaGithub } from "react-icons/fa";
import img from './img/foto_jsilva.png';

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
                            <a class="text-light btnsContato"  href="mailto:joaovps.contato@gmail.com">
                                <GrMail style={{color: "#ecc16c",width:"30px", height: "30px",  marginRight: '10px'}}/>
                                <p style={{textDecoration: 'none'}}>joaovps.contato@gmail.com</p>
                            </a>    
                            <a class="text-light btnsContato" rel='noreferrer' href="https://www.linkedin.com/in/jsilvadev/">
                                <FaLinkedin target='_blank' style={{color: "#ecc16c",width:"30px", height: "30px", marginRight: '10px'}}/>                                
                                <p style={{textDecoration: 'none'}}>Linkedin</p>                            
                            </a>                           
                            <div class="text-light btnsContato">
                                <FaSquareWhatsapp style={{color: "#ecc16c",width:"30px", height: "30px", marginRight: '10px'}}/>                                
                                <p style={{textDecoration: 'none'}}>(35) 9 9934-3134</p>                            
                            </div>                             
                            <a rel='noreferrer' href="https://github.com/JoaoVPSilva" class="text-light btnsContato" style={{textDecoration: 'none'}}>
                                <FaGithub style={{color: "#ecc16c", width: "30px", height: "30px", marginRight: '10px'}} />
                                <p style={{textDecoration: 'none', marginBottom: '0'}}>GitHub</p>                             
                            </a>                             
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