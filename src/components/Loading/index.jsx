import React from 'react';
import loading from '../../images/desktop/loading1.png';

const Loading = () => {
  return (
    <div>
      {/* <h2>Loading...</h2> */}
      {/* <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading" /> */}
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Loading;
