import React from "react";
import Tile from "./Tile";
const Board = ({ board }) => {
  return (
    <div className="grid grid-cols-4 gap-4 bg-board">
      {board.map((row) => {
        let newRow = [];
        return row.map((element) => {
          return <Tile number={element} />;
        });
      })}
    </div>
  );
};

export default Board;
