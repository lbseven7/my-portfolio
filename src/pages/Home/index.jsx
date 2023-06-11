
const Home = () => {

  const sectionHome = {
    background: 'linear-gradient(90deg, #080808 0%, #252528 35%, #777878 100%)',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    color: '#fff',
    fontWeight: 'bold',
    textShadow: '0px 0px 10px #000',
  }
  
  return (
    <>
      <section style={sectionHome}
     >

        <div style={{
          position: 'absolute',
          marginBottom: '5px',
          marginTop: '200px',

        }}>

        <div style={{  }}>
            <p style={{marginLeft: '-35px',fontSize: '0.5rem', marginTop: '17px'  }}>Olá, Eu Sou o ALEXSANDRO</p>
        </div>

        <div style={{position: 'absolute',top: '-5px', marginLeft: '-77px' }}>
          <h1 style={{margin: '32px', marginBottom: '0px',fontSize: '3rem', color: '#F18403'}}>FRONTEND</h1>
        </div>

        <div style={{ position: 'absolute', bottom: '0', top: '60px' }}>
            <h2 style={{marginLeft: '-45px',fontSize: '3rem'}}>DEVELOPER</h2>
        </div>

      </div>
        
        <div style={{ position: 'absolute', marginTop: '350px' }}>
           <h3>
              Tenho 40 anos, sou desenvolvedor frontend 
              <br />com foco em ReactJS e NodeJS.
              Tenho 16 meses <br />de experiência trabalhando 
              como freelancer.
            </h3>
        </div>
       
            
    </section> 

    </>
  );
};

export default Home;