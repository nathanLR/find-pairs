import "../styles/Board.css";

import Card from "./Card";

type PropsType = {
  boardValues: number[][];
  boardState: boolean[][];
  cardClickedHandler: (rPos: number, cPos: number) => void;
};

const Board = ({ boardValues, boardState, cardClickedHandler }: PropsType) => {
  return (
    <div className="board">
      {boardValues.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((card, colIndex) => (
            <Card
              key={colIndex}
              number={boardValues[rowIndex][colIndex]}
              onClick={() => {
                cardClickedHandler(rowIndex, colIndex);
              }}
              isRevealed={boardState[rowIndex][colIndex]}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
