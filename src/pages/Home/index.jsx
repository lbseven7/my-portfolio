
const Home = () => {

  const sectionHome = {
    background: 'linear-gradient(90deg, #080808 0%, #252528 35%, #777878 100%)',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: 'Roboto',
    color: '#fff',
    fontWeight: 'bold',
    textShadow: '0px 0px 10px #000',
  }
  
  return (
    <>
    <section style={sectionHome}>

      <div style={{ position: 'relative', marginBottom: '5px' }}>

        <div style={{ position: 'absolute', left: '-275px', top: '70px', display: 'inline', width: '15vw' }}>
            <p style={{marginLeft: '-130px',fontSize: '2rem', textAlign: 'left',  }}>Olá , Eu Sou o ALEXSANDRO</p>
        </div>

        <div style={{position: 'absolute',top: '40px', right: '-400px'}}>
          <h1 style={{margin: '32px', marginBottom: '0px',fontSize: '10rem', color: '#F18403'}}>FRONTEND</h1>
        </div>

        <div style={{ position: 'absolute', bottom: '0', left: '-275px', top: '180px' }}>
            <h2 style={{marginLeft: '-136px',fontSize: '10rem'}}>DEVELOPER</h2>
        </div>

        </div>
        
        <div style={{ marginRight: '100px', fontSize: '1.5rem', width: '35vw', height:'20vh', marginTop: '350px', marginLeft: '650px' }}>
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