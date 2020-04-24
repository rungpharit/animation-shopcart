import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import ShoppingCards from './components/shopping-cards'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ShoppingCards/>
    </div>
  );
}

export default App;
