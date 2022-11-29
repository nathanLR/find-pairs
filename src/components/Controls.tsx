import React, { ChangeEventHandler, useState } from "react";
import "../styles/Controls.css";
import { BoardSize } from "../types/Types";

const Controls = ({ generate }: { generate: (size: BoardSize) => void }) => {
  const [boardSize, setBoardSize] = useState<BoardSize>({ row: 0, col: 0 });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBoardSize({
      ...boardSize,
      [event.target.name]:
        parseInt(event.target.value) >= 0 ? parseInt(event.target.value) : 0,
    });
  };

  return (
    <div className="control">
      <div className="input">
        <input
          type="number"
          onChange={handleInputChange}
          name="row"
          value={boardSize.row}
        />
        <input
          type="number"
          onChange={handleInputChange}
          name="col"
          value={boardSize.col}
        />
        <span
          className="spanButton"
          onClick={() => {
            generate(boardSize);
          }}
        >
          Generate a board of {boardSize.row * boardSize.col} cards
        </span>
      </div>
      <span className="resetBoardButton">Reset Board</span>
    </div>
  );
};

export default Controls;
