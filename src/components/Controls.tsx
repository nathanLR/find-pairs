import React, { ChangeEventHandler, useState } from "react";
import "../styles/Controls.css";
import { BoardSize } from "../types/Types";

type PropsType = {
  generateBoard: (boardSize: BoardSize) => void;
};

const Controls = ({ generateBoard }: PropsType) => {
  const [boardSizeInputs, setBoardSizeInputs] = useState<BoardSize>({
    row: 4,
    col: 4,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBoardSizeInputs({
      ...boardSizeInputs,
      [event.target.name]: parseInt(event.target.value) >= 0 ? parseInt(event.target.value) : 0,
    });
  };

  return (
    <div className="control">
      <div className="input">
        <input type="number" onChange={handleInputChange} name="row" value={boardSizeInputs.row} />
        <input type="number" onChange={handleInputChange} name="col" value={boardSizeInputs.col} />
        <span
          className="spanButton"
          onClick={() => {
            if (boardSizeInputs.row > 0 && boardSizeInputs.col > 0) {
              generateBoard(boardSizeInputs);
            }
          }}
        >
          Generate a board of {boardSizeInputs.row * boardSizeInputs.col} cards
        </span>
      </div>
      <span className="resetBoardButton">Reset Board</span>
    </div>
  );
};

export default Controls;
