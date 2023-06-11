import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import './App.css';
import './index.css';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const simulateLoading = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(simulateLoading);
    };
  }, []);

  return (
    <div>
      {isLoading ? <Loading /> : <h2>Seu conteúdo principal aqui</h2>}
     
    </div>
  );
};

export default App;
