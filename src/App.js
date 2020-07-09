import React from 'react';
import Header from './components/layout/Header'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Header sections={["Projects","Blog","About","Contact"]} />
      <Home/>
    </div>
  );
}

export default App;
