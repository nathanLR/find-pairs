import { useState } from "react";
import { flushSync } from "react-dom";
import "../styles/Board.css";
import Card from "./Card";
const Board = () => {
  const [board, setBoard] = useState<number[][]>([
    [1, 3, 2],
    [2, 1, 3],
  ]);
  const [cardsRevealed, setCardsRevealed] = useState<boolean[][]>(
    new Array(board.length)
      .fill("")
      .map((row) => new Array(board[0].length).fill(false))
  );
  const [firstOfTwo, setFirstOfTwo] = useState<{
    row: number;
    col: number;
  } | null>(null);

  const userHasWon = (): boolean => {
    let hasWon = true;
    let row = 0;
    while (hasWon && row < cardsRevealed.length) {
      for (let col = 0; col < cardsRevealed[row].length; col++) {
        if (!cardsRevealed[row][col]) {
          hasWon = false;
        }
      }
      row++;
    }
    return hasWon;
  };
  const handleCardClic = (rowIndex: number, columnIndex: number): void => {
    //if card is not already revealed =>
    if (cardsRevealed[rowIndex][columnIndex] === false) {
      // ===== reveal card clicked ====
      const newCardsRevealedAfterClick = [...cardsRevealed];
      newCardsRevealedAfterClick[rowIndex][columnIndex] = true;
      setCardsRevealed(newCardsRevealedAfterClick);
      // ================================
      //if the card clicked is the first  of the pair =>
      if (firstOfTwo === null) {
        setFirstOfTwo({ row: rowIndex, col: columnIndex });
      } else {
        // we land here if a card has already been clicked
        if (
          board[firstOfTwo.row][firstOfTwo.col] === board[rowIndex][columnIndex]
        ) {
          // check if they match, if they do, do nothing (flush pair)
          setFirstOfTwo(null);
          console.log("pair found");
        } else {
          //if they dont, hide them after a delay

          console.log("its not a pair");
          setTimeout(() => {
            const newCardsRevealedAfterSecondClick = [...cardsRevealed];
            newCardsRevealedAfterSecondClick[firstOfTwo.row][firstOfTwo.col] =
              false;
            newCardsRevealedAfterSecondClick[rowIndex][columnIndex] = false;
            setFirstOfTwo(null);
            setCardsRevealed(newCardsRevealedAfterSecondClick);
          }, 1000);
        }
      }
      if (userHasWon()) {
        setTimeout(() => {
          alert("you won");
        }, 500);
      }
    }
  };

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((columnContent, columnIndex) => (
            <Card
              key={columnIndex}
              number={columnContent}
              onClick={() => handleCardClic(rowIndex, columnIndex)}
              isRevealed={cardsRevealed[rowIndex][columnIndex]}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
