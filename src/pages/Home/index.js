import { Link } from 'react-router-dom';
import foto_jv from './img/Foto_portfolio.png'
import './style.css';

function Home(){
    return (
        <div class="container">
       
            <div class="row">
                <div class="col-md-6 d-flex">
                    <div class="align-self-center" id="text_">
                        <h1 class=""><strong>Olá,tudo bem?</strong></h1>                        
                        <p class=""><strong>Me chamo João Vitor P. Silva, sou um Desenvolvedor e Editor. <br/> Se procura saber mais sobre meu trabalho, está no lugar certo!!!</strong></p>
                        <br></br>
                        <Link to="/sobre" class="" id="vamos_btn">Vamos lá?</Link>                        
                    </div>                       
                </div>
                <div class="col-md-6 d-md-block">
                    <img src={foto_jv} alt="" id="foto_pessoal"/>
                </div>
            </div>
            
            
                {/* <h1 class="text-light">olá</h1>
                <h1>Olá. Sou um Desenvolvedor e Editor!</h1> */}
                    
                {/* <button> Vamos tabalhar juntos!</button> */}
                {/* <img className='jv_img' src={foto_jv}/> */}
        </div>
    );
}

export default Home;