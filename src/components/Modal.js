import React from "react";

const Modal = ({ startNewGame, setIsModalOpened }) => {
  return (
    <div className="flex flex-col items-center justify-center fixed top-0 left-0 z-50 w-full h-full border bg-black bg-opacity-50">
      <div className="w-96 h-60 flex-col rounded flex items-center justify-around bg-board">
        <div className="font-clearsans font-bold text-white m-4 text-4xl">
          Are you sure?
        </div>
        <div className="flex items-center justify-around w-full">
          <div
            className="cursor-pointer font-clearsans font-bold bg-newgame text-white rounded px-6 py-3"
            onClick={() => {
              console.log(setIsModalOpened);
              setIsModalOpened(false);
              startNewGame();
            }}
          >
            Yes
          </div>
          <div
            className="cursor-pointer font-clearsans font-bold border-2 border-newgame text-white rounded px-6 py-3"
            onClick={() => setIsModalOpened(false)}
          >
            No
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
