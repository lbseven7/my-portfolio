import work1 from '../../images/desktop/projeto_01.png';
import work2 from '../../images/desktop/projeto_02.png';
import '../Projects/projects.css';

const Projects = () => {
  
  return (
    <>
      <section className='projects'>
        <div className='project-one' >
         
          <img
            src={work1} alt="work1"/>
             
          <h3>ESTUDO DE CASO</h3>
          <h2>SITE DE SISTEMA DE<br /> CHAMADA ESCOLAR</h2>

          <button type='button'>VER PROJETO</button>
          </div>
        
      </section> 
      
      <section className='projects'>
        <div className='project-two' >
        
            <img src={work2} alt="work2"/>
               
            <h3>ESTUDO DE CASO</h3>
            <h2>SITE DIVULGAÇÃO PARA<br /> PLANTIO DE PAU BRASIL</h2>

            <button type='button'>VER PROJETO</button>
         </div>
       
      </section> 

    </>
  );
};

export default Projects;