import { useState } from "react";
import { BoardSize, CardData } from "../types/Types";
import Board from "./Board";
import Controls from "./Controls";
import { generateBoardContent } from "../utils/functions";

const Game = () => {
  const [boardValues, setBoardValues] = useState<number[][] | null>(null);
  const [boardState, setBoardState] = useState<boolean[][]>([[]]);
  const [firstOfPair, setFirstOfPair] = useState<CardData | null>(null);
  const generateBoard = (values: BoardSize): void => {
    console.log("generated board of:", values);

    setBoardValues(generateBoardContent(values));
    setBoardState(new Array(values.row).fill("").map((row) => new Array(values.col).fill(false)));
  };

  const hasWon = (): boolean => {
    let hasWon = true;
    let i = 0;
    const flatBoardState = boardState.flat();
    while (i < flatBoardState.length && hasWon) {
      hasWon = flatBoardState[i];
      i++;
    }
    return hasWon;
  };

  const cardClickedHandler = (rowPos: number, colPos: number) => {
    console.log("u clicked on card", rowPos, colPos);
    if (!boardState[rowPos][colPos]) {
      let newBoardState = [...boardState];
      newBoardState[rowPos][colPos] = true;
      setBoardState(newBoardState);
      if (firstOfPair === null) {
        setFirstOfPair({ row: rowPos, col: colPos });
      } else {
        //compare two cards
        if (boardValues[rowPos][colPos] === boardValues[firstOfPair.row][firstOfPair.col]) {
          //the two cards are equal, don't hide them but reset firstOfPair state

          setFirstOfPair(null);
        } else {
          //the two cards arent equal, hide them after a delay and reset firstOfPair state
          setTimeout(() => {
            newBoardState[rowPos][colPos] = false;
            newBoardState[firstOfPair.row][firstOfPair.col] = false;

            setBoardState([...newBoardState]);

            setFirstOfPair(null);
          }, 1000);
        }
      }
      if (hasWon()) {
        alert("you won !");
      }
    }
  };

  return (
    <div>
      <Controls generateBoard={generateBoard} />
      {boardValues && boardState ? (
        <Board
          boardValues={boardValues}
          boardState={boardState}
          cardClickedHandler={cardClickedHandler}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Game;
