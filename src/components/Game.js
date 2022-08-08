import { useEffect, useState } from "react";
import use2048 from "../hooks/use2048";
import Board from "./Board";
import Header from "./Header";
import ChooseSize from "./ChooseSize";

const Game = () => {
  const [size, setSize] = useState(4);
  const { board, score, startNewGame, handleKeyUp } = use2048(size);
  const [isChoosingSize, setIsChoosingSize] = useState(true);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  return (
    <div className="border-red-500 m-16">
      <Header score={score} startNewGame={startNewGame} />
      {!isChoosingSize && <Board board={board} size={size} />}
      {isChoosingSize && (
        <ChooseSize
          setSize={setSize}
          setIsChoosingSize={setIsChoosingSize}
        />
      )}
    </div>
  );
};

export default Game;
