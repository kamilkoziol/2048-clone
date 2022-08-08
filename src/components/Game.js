import { useEffect } from "react";
import use2048 from "../hooks/use2048";
import Board from "./Board";

const Game = () => {
  const { board, handleKeyUp } = use2048(4);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  return (
    <div className="border-red-500 border m-16">
      <Board board={board} />
    </div>
  );
};

export default Game;
