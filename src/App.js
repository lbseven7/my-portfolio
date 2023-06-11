import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import './App.css';
import Home from './pages/Home';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const simulateLoading = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      clearTimeout(simulateLoading);
    };
  }, []);

  return (
    <div>
      {isLoading ? <Loading /> : <Home />}
    </div>
  );
};

export default App;
