import React, { ChangeEventHandler, useState } from "react";
import "../styles/Controls.css";

const Controls = ({ generate }: { generate: (x: number) => void }) => {
  const [pairsNumber, setPairsNumber] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPairsNumber(parseInt(event.target.value));
  };

  return (
    <div className="control">
      <div className="input">
        <input type="text" placeholder="20" onChange={handleInputChange} />
        <span
          className="spanButton"
          onClick={() => {
            generate(pairsNumber);
          }}
        >
          Generate a board of {pairsNumber * 2} cards
        </span>
      </div>
      <span className="resetBoardButton">Reset Board</span>
    </div>
  );
};

export default Controls;
