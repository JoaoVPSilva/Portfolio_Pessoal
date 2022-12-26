import { Link } from 'react-router-dom';
import foto_jv from './img/Foto_portfolio.png'
import './style.css';

function Home(){
    return (
        <div class="container">
       
            <div class="row">
                <div class="col-md-6 d-flex">
                    <div class="align-self-center" id="text_">
                        <h1 class="" id='text_home_1'>Olá, me chamo <strong>João Vitor.</strong></h1>                        
                        <br></br>
                        <p class="" id='text_home_2'>
                            Desenvolvedor Web e Editor de vídeos.<br/>
                            Tenho 19 anos, sou estudante de Ciências da Computação, e no tempo livre, editor de vídeos.<br/>
                            Quer conhecer mais do meu trabalho?
                        </p>
                        
                        <Link to="/sobre" class="" id="vamos_btn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <strong>Vamos lá?</strong>
                        </Link>                        
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