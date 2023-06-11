// import titleBg from '../../images/desktop/titulo.png'

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
    <section style={sectionHome}>
      <div style={{ position: 'relative', marginBottom: '5px' }}>
        <div style={{
          position: 'absolute',
          top: '-300px',
          right: '0'

        }}>
          <h1 style={{
            margin: '-35px',
            marginBottom: '0px',
            fontSize: '14rem',
          }}>REACT</h1>
        </div>
        <div style={{ position: 'absolute', bottom: '0', left: '-480px', top: '-170px' }}>
            <h2 style={{marginLeft: '-35px',fontSize: '14rem',}}>DEVELOPER</h2>
        </div>
      </div>
    </section> 
  );
};

export default Home;