import work1 from '../../images/desktop/projeto_01.png';
import work2 from '../../images/desktop/projeto_02.png';
// import { Link } from 'react-router-dom';

const Projects = () => {

  const projects = {
    background: 'linear-gradient(90deg, #919191 0%, #d9d9d9 35%, #fbf2bc 100%)',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    color: '#454545',
  }

  const imagem = {
    width: '250px',
    marginTop: '20px',
  };

  const btn = {
    background: '#F18403',
    
    border: 'none',
    borderRadius: '50px',
    padding: '10px',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginTop: '60px',
    width: '250px',
    boxShadow: '4px 8px 10px rgba(0, 0, 0, 0.25)',
  }

  const estudoDeCaso = {
    color: '#737373',
    textAlign: 'center',
    marginBottom: '15px',
  }

  const sobreProjeto = {
    textAlign: 'center',
    fontSize: '1.5rem',
    lineHeight: '1.5rem',
    marginTop: '25px',
  }
  
  return (
    <>
      <section style={projects}
     >

        <div style={{
          position: 'absolute',
          marginBottom: '5px',
          marginTop: '50px',
          }} >

          <img
            src={work1} alt="work1"
            style={imagem}
          />
               
            <h3 style={estudoDeCaso}>ESTUDO DE CASO</h3>
            <h2 style={sobreProjeto}>SITE DE SISTEMA DE<br /> CHAMADA ESCOLAR</h2>

          <button style={btn} type='button'>
            {/* <Link to='#'>VER PROJETO</Link> */}
            VER PROJETO
          </button>
        </div>   
      </section> 

      <hr />      
      <section style={projects}
     >

        <div style={{
          position: 'absolute',
          marginBottom: '5px',
          marginTop: '50px',
          }} >

          <img
            src={work2} alt="work1"
            style={imagem}
          />
               
            <h3 style={estudoDeCaso}>ESTUDO DE CASO</h3>
            <h2 style={sobreProjeto}>SITE DIVULGAÇÃO PARA<br /> PLANTIO DE PAU BRASIL</h2>

          <button style={btn} type='button'>
            {/* <Link to='#'>VER PROJETO</Link> */}
            VER PROJETO
          </button>
        </div>   
      </section> 
      
      <hr /> 

    </>
  );
};

export default Projects;