import React from "react";
import Cell from "./Cell";
import clsx from "clsx";

const Board = ({ board, size }) => {
  const cells = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
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
  console.log(classes);

  return <div className={classes}>{cells}</div>;
};

export default Board;
