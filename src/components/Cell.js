import React from "react";
import Tile from "./Tile";
import clsx from "clsx";

const Cell = (props) => {
  const classes = clsx([
    "bg-cell",
    "m-2",
    "rounded",
    "flex",
    "items-center",
    "justify-center",
  ]);
  return <div className={classes}>{<Tile tile={props.tile} />}</div>;
};

export default Cell;
