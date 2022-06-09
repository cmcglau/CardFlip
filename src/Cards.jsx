import React from "react";
import front from "./Images/front.jpg";
import apple from "./Images/fruitsandvegetables_Apple.png";
import banana from "./Images/fruitsandvegetables_Banana.png";
import beetroot from "./Images/fruitsandvegetables_Beetroot.png";
import fruitBowl from "./Images/fruitsandvegetables_Bowl_of_fruit.png";
import boxProduct from "./Images/fruitsandvegetables_Box_of_products.png";
import carrot from "./Images/fruitsandvegetables_Carrot.png";
import cherry from "./Images/fruitsandvegetables_Cherry.png";
import corn from "./Images/fruitsandvegetables_Corn.png";


const cardType = [
  apple, 
  apple,
  banana,
  banana,
  beetroot,
  beetroot,
  fruitBowl,
  fruitBowl,
  boxProduct,
  boxProduct,
  carrot,
  carrot,
  cherry,
  cherry,
  corn,
  corn
];

let numberFlips = 0;
let totalFlips = 0;
let firstcard = -1;
let seccard = -1;
const displayNum = 0;

const Cards = (props) => {
  const {fruit} = props;
  
  var card = document.querySelector('.flipper' + fruit);
  const handleFlip = () => {
    if (card === null) {
      card = document.querySelector('.flipper' + fruit);
    }
    numberFlips = numberFlips + 1;
    totalFlips = totalFlips + 1;
    console.log('Total Flips = ' + totalFlips);

    if (numberFlips === 1) {
      firstcard = fruit;
      card.classList.toggle('is-flipped'+firstcard);
    }
    else if (numberFlips === 2) {
      seccard = fruit;
      card.classList.toggle('is-flipped'+seccard);
      if ((firstcard%2 === 0 && firstcard !== seccard- 1) || (firstcard%2 === 1 && firstcard !== seccard + 1)) {

        setTimeout(()=>{
          card = document.querySelector('.flipper' + firstcard);
          card.classList.toggle('is-flipped' + firstcard);
          card = document.querySelector('.flipper' + seccard);
          card.classList.toggle('is-flipped' + seccard);
        },1500);

        
        setTimeout(()=>{
          
        },2000);

        
      }
      numberFlips = 0;
    }
    /*
    if(cardState === 0){
      setCardState(1);
      card.classList.toggle('is-flipped'+fruit);
      fruitPair[fruit] = 1;
      console.log('The Flip Count is: ' + fruitPair[fruit]);
    }
    else {
      setCardState(0);
      fruitPair[fruit] = 0;
      card.classList.toggle('is-flipped'+fruit);
      console.log('The Flip Count is: ' + fruitPair[fruit]);
    }
    */
    
  }
    return (
      <button onClick={handleFlip} class="buttonCol">
        <div class="flipcard">
          <div class={"flipper" + fruit}>
            <div class="front">
              <img src={front} alt="" height="150px" width="150px"></img>
            </div>
            <div class="back">
              <img src={cardType[fruit]} alt="apple" height="150px" width="150px"></img>
            </div>
          </div>
        </div>
      </button>
    )
}

export default Cards;

