import { useState } from "react";
import Board from "./Board";
import Controls from "./Controls";

const Game = () => {
  //logic
  const generateRandomBoard = (pairsNumber: number): void => {
    console.log("board generated with " + pairsNumber);
  };
  return (
    <div>
      <Controls generate={generateRandomBoard} />
      <Board />
    </div>
  );
};

export default Game;
