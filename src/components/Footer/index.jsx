import { FaGithub, FaWhatsapp, FaFileDownload } from 'react-icons/fa';
import '../Footer/style.css';
import cv from '../../profile.pdf';

const Footer = () => {

  return (
    <div className='contacts'>
      <div className='container'>
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

      </div>
        <p>&copy; lbseven7 2023</p>
    </div>
  );
};

export default Footer;
