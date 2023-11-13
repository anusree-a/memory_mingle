import React from "react";
import "./singleCard.css";

export default function SingleCard({ card, handleChoice, flipped }) {
  const handleClick = () => {
    if (!flipped) {
      handleChoice(card);
    }
  };

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleClick}>
      <div className={flipped ? "back" : "front"}>
        <img
          src={flipped ? card.src : "Assets/spooky-cover.jpg"}
          alt={flipped ? "card back" : "card front"}
        />
      </div>
    </div>
  );
}
