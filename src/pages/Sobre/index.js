import './style.css';
import { Link } from 'react-router-dom' ;

function Sobre(){
    return (
        <div class="all">
            <br/><br/><br></br>
            <section class="caixa">        
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 d-flex ">
                            <div class="align-self-center componente">
                                <h2 class=""><strong>Sobre mim </strong><hr/></h2>
                                <p class="p_componente">
                                Olá, Meu nome é <strong>João Vitor</strong>, sou um <strong>Desenvolvedor Front-End e 
                                Editor de Vídeos!</strong> Minha paixão pela área começou em meados
                                de 2015, quando comecei a aprender a editar vídeos através de
                                tutoriais na internet, desde então venho aprendendo cada vez 
                                mais, até que comecei a Faculdade de Ciências da Computação
                                e descobri mais uma área que sou apaixonado.
                                </p>
                                {/* <a href="" class="btn btn-primary">Meus Projetos</a> */}
                            </div>
                        </div>
                        <div class="col-md-6">
                             {/* <img src={foto_teste} alt="" id="foto_pessoal"/> */}
                        </div>
                    </div>
                </div>
            </section>

            <br/><br/><br/><br/>
            <section class="caixa">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            {/* <img src="img/juros.png" class="img-fluid"> */}
                        </div>
                        <div class="col-md-6 d-flex ">
                            <div class="align-self-center componente">
                                <h2 class=""><strong>Experiências</strong><hr/></h2>
                                <p class="p_componente">
                                Já tive o privilégio de fazer 1 ano de estágio como <strong>Analista de 
                                Sistemas/Requisitos</strong>, além de divesos projetos pessoais na área
                                de Desenvolvimento. Já na área de Edição, trabalhei com diversos
                                Freelances, além dos inúmeros projetos pessoais.<br/>
                                Estou sempre em busca de Aprender cada vez mais, com cursos
                                e projetos externos.<br/>
                                Encontre mais na aba <Link id="btn_inpage" to="/sobre"><strong>"Projetos"</strong></Link>
                                </p>                                
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <br/><br/><br></br>
            <section class="caixa">        
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 d-flex caixa_info">
                            <div class="align-self-center">
                                <h2 class="text-light"><strong>Habilidades </strong><hr/></h2>
                                <p>
                                Algumas tecnologias que eu possuo conhecimento, e venho
                                utilizando:
                                </p>

                                <div class="row">
                                    <div class="col-md-6 d-flex text-light">
                                        <ul>
                                            <li>JavaScript</li>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>Bootstrap 5</li>
                                            <li>Frameworks Js
                                                <ul>
                                                    <li>ReactJS</li>
                                                    <li>VueJS</li>
                                                </ul>
                                            </li>
                                            <li>Banco de Dados - SQL
                                                <ul>
                                                    <li>Informix</li>
                                                    <li>MySQL</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-md-6 text-light">
                                        <ul>                                            
                                            <li>Pacote Adobe
                                                <ul>
                                                    <li>Photoshop</li>
                                                    <li>Premiere Pro</li>
                                                    <li>After Effects</li>
                                                </ul>
                                            </li>
                                            <li>Sony Vegas Pro</li>       
                                            <li>Pacote Office
                                                <ul>
                                                    <li>Excel</li>
                                                    <li>Word</li>
                                                    <li>PowerPoint</li>
                                                </ul>
                                            </li>    
                                            <li>Versionamento -GIT</li>                                     
                                        </ul>
                                    </div>
                                </div>
                                
                               
                                {/* <a href="" class="btn btn-primary">Meus Projetos</a> */}
                            </div>
                        </div>
                        <div class="col-md-6">
                             {/* <img src={foto_teste} alt="" id="foto_pessoal"/> */}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Sobre;