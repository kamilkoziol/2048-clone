import React from "react";
import clsx from "clsx";

const Tile = (props) => {
  const number = props.tile === 0 ? "" : props.tile;

  const classes = clsx([
    number <= 256 ? "bg-tile-" + number : "bg-tile-above",
    "flex",
    "items-center",
    "justify-center",
    "w-full",
    "h-full",
    "font-clearsans",
    "text-number-dark",
    "text-4xl",
    "font-bold",
    "rounded",
    number > 4 ? "text-number-light" : "text-number-dark",
  ]);
  return <div className={classes}>{number}</div>;
};

export default Tile;
