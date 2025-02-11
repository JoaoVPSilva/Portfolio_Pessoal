import './style.css';
import foto_chair from './img/chair_guy.png';
import foto_lot from './img/lot_things.png';
import foto_zebra from './img/zebra.png';

function Sobre(){
    return (
        <div class="all">
            <br/><br/><br></br>
            <section class="caixa">        
                <div class="container" id='containerSobre1'>
                    <div class="row">
                        <div class="col-md-6 d-flex ">
                            <div class="align-self-center componente">
                                <h2 class=""><strong>Sobre mim </strong><hr/></h2>
                                <p class="p_componente">
                                Olá, Meu nome é <strong id='text_strong'>João Vitor</strong>, sou um <strong id='text_strong'>Desenvolvedor</strong>.
                                Comecei meus estudos em 2020, na faculdade de Ciências da Computação, e desde então já trabalhei como estagiário em Análise de Sistemas/Requisitos,
                                e atualmente trabalho a ma#13131Fis de 1 ano como Desenvolvedor fullstack para uma multinacional na área de ferrovias.   
                                Sou um apaixado pela tecnologia, que no tempo livre faz uns freelances para complementar os conhecimentos e a renda.                              
                                </p>
                                {/* <a href="" class="btn btn-primary">Meus Projetos</a> */}
                            </div>
                        </div>
                        <div class="col-md-6">
                            <img src={foto_zebra} alt="" id="foto_pessoal"/> 
                        </div>
                    </div>
                </div>
            </section>

            <br/><br/><br/><br/>
            <section class="caixa">
                <div class="container" id='containerSobre1'>
                    <div class="row">
                        <div class="col-md-6">
                            <img src={foto_lot} alt="" id="foto_pessoal"/> 
                        </div>
                        <div class="col-md-6 d-flex ">
                            <div class="align-self-center componente">
                                <h2 class=""><strong>Experiências</strong><hr/></h2>
                                <p class="p_componente">
                                &nbsp;&nbsp;&nbsp;Já tive o privilégio de fazer 1 ano de estágio como <strong id='text_strong'>Analista de 
                                Sistemas/Requisitos</strong> atuando no sistema de agendamento de vacinas de Jundiaí-SP durante o COVID-19, além dos sitemas do Mundo da Crianças (Jundiaí) e do Jundiaí Empreendedora, entre outros trabalhos menores.<br/>
                                &nbsp;&nbsp;&nbsp;Atualmente estou trabalhando como <strong id='text_strong'>Desenvolvedor fullstack</strong> para uma multinacional na área de Ferrovias, onde faço parte de um projeto para um sistema de ferrovias utilizado por grandes transportadoras, fazendo melhorias e adicionando funcionalidades tanto no <strong id='text_strong'>Front-end</strong> <strong id='text_strong'>Back-end</strong>, além da implementação (em conjunto com outros colegas) de testes automatizados em Cypress no front.<br/>
                                &nbsp;&nbsp;&nbsp;Estou em busca de projetos como freelance para praticar meus conhecimentos e para garantir uma renda extra.
                                <br/>                                                            
                                </p>                                
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <br/><br/><br></br>
            <section class="caixa">        
                <div class="container" id='containerSobre1'>
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
                                            <li>Spring
                                                <ul>
                                                    <li>Java/Groovy</li>
                                                </ul>
                                            </li>
                                            <li>Angular 9
                                                <ul>
                                                    <li>HTML</li>
                                                    <li>CSS</li>
                                                    <li>TypeScript</li>
                                                    <li>JavaScript</li>
                                                </ul>
                                            </li>                                            
                                            <li>Bootstrap 5</li>
                                            <li>ReactJS
                                            </li>
                                            <li>Banco de Dados - SQL
                                                <ul>
                                                    <li>Informix</li>
                                                    <li>MySQL</li>
                                                    <li>Oracle</li>
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
                                                    <li>After Effects (Básico)</li>
                                                </ul>
                                            </li>
                                            <li>Sony Vegas</li>       
                                            <li>Pacote Office
                                                <ul>
                                                    <li>Excel</li>
                                                    <li>Word</li>
                                                    <li>PowerPoint</li>
                                                </ul>
                                            </li>    
                                            <li>Versionamento -GIT</li>  
                                            <li>Cypress</li>
                                        </ul>
                                    </div>
                                </div>
                                
                               
                                {/* <a href="" class="btn btn-primary">Meus Projetos</a> */}
                            </div>
                        </div>
                        <div class="col-md-6">
                            <img src={foto_chair} alt="" id="foto_pessoal"/> 
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Sobre;