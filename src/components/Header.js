import React from "react";

const Header = ({ score, setIsModalOpened }) => {
  return (
    <div className="flex justify-between py-4 items-center">
      <div className="text-6xl text-number-dark font-bold">2048</div>
      <div className="flex flex-col items-end gap-4">
        <div className="flex">
          <div className="flex items-center justify-center flex-col font-bold bg-board p-1 px-4 rounded">
            <span className="p-1 text-tile-2 uppercase text-xs">
              Score
            </span>
            <span className="leading-none text-white text-2xl">
              {score}
            </span>
          </div>
          <div className="flex items-center justify-center flex-col font-bold bg-board p-1 px-4 ml-2 rounded">
            <span className="p-1 text-tile-2 uppercase text-xs">Best</span>
            <span className="leading-none text-white text-2xl">1234</span>
          </div>
        </div>
        <div
          className="cursor-pointer bg-newgame text-white font-bold rounded py-2 px-3"
          onClick={() => setIsModalOpened(true)}
        >
          New Game
        </div>
      </div>
    </div>
  );
};

export default Header;
