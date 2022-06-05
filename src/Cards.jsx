import React from "react";

import apple from "./Images/fruitsandvegetables_Apple.png";
//import banana from "./Images/fruitsandvegetables_Banana.png";
import front from "./Images/front.jpg";
import empty from "./Images/empty.png";

const Cards = () => {
  const [cardState, setCardState] = React.useState(0);
  var card = document.querySelector('.flipper');
  const handleFlip = () => {
    if(cardState === 0){
      setCardState(1);
      card.classList.toggle('is-flipped');
    }
    else {
      setCardState(0);
      card.classList.toggle('is-flipped');
    }
  }
    return (
      <button onClick={handleFlip} class="buttonCol">
        <div class="flipcard">
          <div class="flipper">
            <div class="front">
              <img src={front} alt="" height="150px" width="150px"></img>
            </div>
            <div class="back">
              <img src={apple} alt="apple" height="150px" width="150px"></img>
            </div>
          </div>
        </div>
      </button>
    )
}

export default Cards;
