import React from "react";
import Cell from "./Cell";
import clsx from "clsx";

const Board = ({ board }) => {
  const size = board.length;
  const cells = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      cells.push(<Cell tile={board[i][j]} />);
    }
  }

  const classes = clsx([
    "grid",
    `grid-cols-${size}`,
    `grid-rows-${size}`,
    "w-96",
    "h-96",
    "bg-board",
    "p-2",
    "rounded",
  ]);

  return <div className={classes}>{cells}</div>;
};

export default Board;
