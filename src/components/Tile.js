import React from "react";

const Tile = (props) => {
  console.log(props);
  return (
    <div className="w-4 h-4 bg-blue-300 flex justify-center items-center">
      {props.number}
    </div>
  );
};

export default Tile;
