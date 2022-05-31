import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import React, {useState} from 'react';
import Cards from './Cards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> This is my Card Flipping App </p>
        <Cards />
        <Footer />
      </header>
    </div>
  );
}

export default App;
