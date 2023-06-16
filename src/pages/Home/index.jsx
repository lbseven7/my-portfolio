import { FaArrowAltCircleDown } from 'react-icons/fa';
import '../Home/home.css';

const Home = () => {

  return (
   
      <section className='homeContainer'>
        <div className='container'>
      
          <div className='box' >
            <p>Olá, Eu Sou o ALEXSANDRO</p>
          </div>
          

          <div className='box1' >
            <h1>FRONTEND</h1>
          </div>

          <div className='box2'>
            <h2>DEVELOPER</h2>
          </div>

        </div>
        
        <div className='box3'>
           <h3>
              Tenho 40 anos, sou desenvolvedor FullStack<br />
              com foco em FrontEnd.
              Tenho 16 meses de <br />experiência trabalhando 
              como freelancer.
        </h3>
        <div className='go-projects'>
            <a href="#projects">
              <FaArrowAltCircleDown />
            </a>
        </div>
      </div>
        
          
    </section> 
  );
};

export default Home;