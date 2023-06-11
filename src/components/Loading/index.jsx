import React from 'react';
import front from '../../images/desktop/logo-transp.png';
import back from '../../images/desktop/logo-transp.png';

const Loading = () => {

  React.useEffect(() => {
    document.body.classList.add('loading');
    return () => {
      document.body.classList.remove('loading');
    };
  }, []);
  
  return (
    <div className="logo">
      <div className="logo-container">
        <div className="front-face" style={{ backgroundImage: `url(${front})` }}></div>
        <div className="back-face" style={{ backgroundImage: `url(${back})` }}></div>
      </div>
    </div>
  );
};

export default Loading;
