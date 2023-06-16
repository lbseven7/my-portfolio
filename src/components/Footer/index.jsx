import { FaGithub, FaWhatsapp, FaFileDownload, FaArrowAltCircleUp } from 'react-icons/fa';
import '../Footer/footer.css';
import cv from '../../profile.pdf';

const Footer = () => {

  return (
    <div className='contacts'>
      <div className='container'>
        <div className='box-icons'>
          {/* <h2>Contatos</h2> */}
          <a className='whatsapp' href='https://api.whatsapp.com/send?phone=5573988146516' target='_blank' rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a
            className='download'
            href={cv}
            download='cv.pdf'
          >
            <FaFileDownload />
          </a>
          <a className='github' href="https://github.com/lbseven7" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a className='back-to-home' href="#">
            <FaArrowAltCircleUp />
          </a>
        </div>
        
      </div>
          <p>&copy;Desenvolvido por <a href='https://github.com/lbseven7' target='_blank' rel="noreferrer">lbseven7</a></p>
    </div>
  );
};

export default Footer;
