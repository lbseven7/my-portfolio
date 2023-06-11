import titleBg from '../../images/desktop/titulo.png'

const Home = () => {

  const home = {
    background: 'linear-gradient(90deg, #080808 0%, #252528 35%, #777878 100%)',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const title = {
    width: '45%',
  }
  
  return (
    <div style={home}>
      <img src={titleBg} alt="title" style={title}/>
    </div>
  );
};

export default Home;