// import React, { useState, useEffect } from 'react';
// import Loading from './components/Loading';
import './App.css';
import Footer from './components/Footer';
import Projects from './pages/Projects';
// import Home from './pages/Home';

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const simulateLoading = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 4000);

  //   return () => {
  //     clearTimeout(simulateLoading);
  //   };
  // }, []);

  return (
    <div>
      <Projects />
      <Footer />
      {/* {isLoading ? <Loading /> : <Home />} */}
    </div>
  );
};

export default App;
