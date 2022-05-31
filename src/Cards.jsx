import React, {useState} from "react";

const Cards = () => {
    const [cardState, setCardState] = React.useState(0);
    const [cardStr, setCardStr] = React.useState('Front');
    const [cardStyle, setCardStyle] = React.useState('White');
    const handleCard = () => {
      if (cardState === 0) {
        setCardState(1);
        setCardStr('Back');
        setCardStyle('Green');
      }
      else {
        setCardState(0);
        setCardStr('Front');
        setCardStyle('White');
      }
    }
    return (
        <button onClick={handleCard} className={cardStyle}> {cardStr} </button>
    )
}

export default Cards;
