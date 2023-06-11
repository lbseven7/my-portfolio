import { FaGithub, FaWhatsapp, FaFileDownload } from 'react-icons/fa';
// import {Link}  from 'react-router-dom';

const Footer = () => {

  const contacts = {
    background: 'linear-gradient(90deg, #080808 0%, #252528 35%, #777878 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '130px',
    width: '100%',
    bottom: '0',
    fontFamily: 'Roboto',
    color: '#454545',
    // position: 'fixed',
  }
  
  return (
    <div style={contacts}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        height: '50px',
      }}>
        <a href='https://api.whatsapp.com/send?phone=5573988146516' target='_blank' rel="noreferrer">
          <FaWhatsapp style={{
            height: '100%',
            width: '40px',
            color: 'gray',
          }} />
        </a>
        <a href="caminho-para-o-seu-cv" target="_blank">
        <FaFileDownload style={{
          height: '100%',
          width: '30px',
          color: 'gray',
          }} />
        </a>
        <a href="https://github.com/lbseven7" target="_blank" rel="noreferrer">
        <FaGithub style={{
          height: '100%',
          width: '40px',
          color: 'gray',
          }} />
          </a>
      </div>
      <p style={{
        textAlign: 'center',
        color: 'black',
        fontSize: '12px',
        marginTop: '12px',
      }}>&copy; lbseven7 2023 - Todos os direitos reservados</p>
    </div>
  );
};

export default Footer;

/*<a href="" target="_blank" rel="noopener noreferrer">
          <img style={{ width: '150px', background: 'red'}} src={whatsapp} alt="WhatsApp" />
        </a>
        <a >
          <img style={{ width: '150px'}} src={cv} alt="CV" />
        </a>
        <a  rel="noopener noreferrer">
          <img style={{ width: '150px'}} src={github} alt="GitHub" />
        </a>*/