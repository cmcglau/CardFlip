import './App.css';
import Footer from './Footer';
import Cards from './Cards';
import React, {useState} from 'react';

window.flipCount = 0;

const cardNum = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
];

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Used like so
shuffle(cardNum);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> This is my Card Matching App </p>
        <p> Number of flips is: {window.flipCount} </p>
        <div className='cardGrid'>
          <Cards fruit = {cardNum[0]}/>
          <Cards fruit = {cardNum[1]}/>
          <Cards fruit = {cardNum[2]}/>
          <Cards fruit = {cardNum[3]}/>
          <Cards fruit = {cardNum[4]}/>
          <Cards fruit = {cardNum[5]}/>
          <Cards fruit = {cardNum[6]}/>
          <Cards fruit = {cardNum[7]}/>
          <Cards fruit = {cardNum[8]}/>
          <Cards fruit = {cardNum[9]}/>
          <Cards fruit = {cardNum[10]}/>
          <Cards fruit = {cardNum[11]}/>
          <Cards fruit = {cardNum[12]}/>
          <Cards fruit = {cardNum[13]}/>
          <Cards fruit = {cardNum[14]}/>
          <Cards fruit = {cardNum[15]}/>
        </div>
      </header>
      <Footer />
    </div>
    
  )
}

export default App;
