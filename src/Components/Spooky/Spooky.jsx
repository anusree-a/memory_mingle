import React, { useEffect, useState } from "react";
import "./Spooky.css";
import SingleCard from "../singleCard/singleCard";

const cardImages = [
  { src: "Assets/bat-1.png", matched: false },
  { src: "Assets/black-1.png", matched: false },
  { src: "Assets/ghost-1.png", matched: false },
  { src: "Assets/pumpkin-1.png", matched: false },
  { src: "Assets/skull-1.png", matched: false },
  { src: "Assets/spider-1.png", matched: false },
];

function Spooky() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  

  //shuffle cards
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffleCards);
    setTurns(0);
  };
  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare 2 selected cards
  useEffect(() => {
   
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
         return prevCards.map(card => {
          if(card.src === choiceOne.src){
            return {...card, matched: true}
          }else{
            return card
          }
         })
        })
        resetTurn()
      } else {
       setTimeout(() => resetTurn(),1000)
      }
    }
  }, [choiceOne, choiceTwo]);
  console.log(cards)

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    
  };

  //start game automatically
  useEffect(() => {
    shuffleCards()
  },[])

  return (
    <div className="container-spooky">
      <h1 className="hs1">SpookyMatch</h1>
      <button className="btns1" onClick={shuffleCards}>New game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard 
          key={card.id}
           card={card}
           handleChoice={handleChoice}
           flipped={card === choiceOne || card === choiceTwo || card.matched}
         
           />
        ))}
      </div>
      <p className="turns" >Turns:{turns}</p>
    </div>
  );
}

export default Spooky;
 