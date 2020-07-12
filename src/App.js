import React from 'react';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Header sections={["Projects","Blog","About","Contact"]} />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
