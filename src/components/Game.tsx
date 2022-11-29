import { useState } from "react";
import { BoardSize } from "../types/Types";
import Board from "./Board";
import Controls from "./Controls";

const Game = () => {
  //logic

  const generateRandomBoard = (boardSize: BoardSize): void => {
    if (boardSize.row * boardSize.col === 0) {
      console.log("you cannot generate a board of 0 cards :(");
    } else {
      console.log("board generated with " + boardSize.row * boardSize.col);
    }
  };
  return (
    <div>
      <Controls generate={generateRandomBoard} />
      <Board />
    </div>
  );
};

export default Game;
