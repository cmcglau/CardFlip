import './App.css';
import Footer from './Footer';
import Cards from './Cards';
import React, {useState} from 'react';
import apple from "./Images/fruitsandvegetables_Apple.png";
import banana from "./Images/fruitsandvegetables_Banana.png";
import beetroot from "./Images/fruitsandvegetables_Beetroot.png";
import fruitBowl from "./Images/fruitsandvegetables_Bowl_of_fruit.png";
import boxProduct from "./Images/fruitsandvegetables_Box_of_products.png";

const cardType = [
  apple,
  banana,
  beetroot,
  fruitBowl,
  boxProduct
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> This is my Card Matching App </p>
        <Cards />
      </header>
      <Footer />
    </div>
    
  )
}

export default App;
