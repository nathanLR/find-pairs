import React from "react";
import "../styles/Card.css";

type CardPropType = {
  number: number;
  onClick: () => void;
  isRevealed: boolean;
};

const Card = ({ number, onClick, isRevealed }: CardPropType) => {
  return (
    <div className={`card ${isRevealed ? "revealed" : ""}`} onClick={onClick}>
      {isRevealed ? number : ""}
    </div>
  );
};

export default Card;
