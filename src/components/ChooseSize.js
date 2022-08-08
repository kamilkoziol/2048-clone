import React from "react";

const ChooseSize = (props) => {
  function handleSizeSelect(size) {
    props.setIsChoosingSize(false);
    props.setSize(size);
  }

  return (
    <div className="font-clearsans flex flex-col justify-around items-center w-96 h-96 bg-board p-2 rounded">
      <div className=" text-tile-2 font-bold text-3xl">Choose size</div>
      <div className="flex justify-around w-full">
        <div
          className="font-bold p-4 rounded text-2xl cursor-pointer text-white bg-newgame"
          onClick={() => handleSizeSelect(3)}
        >
          3x3
        </div>
        <div
          className="font-bold p-4 rounded text-2xl cursor-pointer text-white bg-newgame"
          onClick={() => handleSizeSelect(4)}
        >
          4x4
        </div>
        <div
          className="font-bold p-4 rounded text-2xl cursor-pointer text-white bg-newgame"
          onClick={() => handleSizeSelect(7)}
        >
          7x7
        </div>
      </div>
    </div>
  );
};

export default ChooseSize;
