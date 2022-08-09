import { useEffect, useState } from "react";
import use2048 from "../hooks/use2048";
import Board from "./Board";
import Header from "./Header";
import ChooseSize from "./ChooseSize";
import Modal from "./Modal";
import useLocalStorage from "../hooks/useLocalStorage";

const Game = () => {
  const [size, setSize] = useState(4);
  const [isModalOpened, setIsModalOpened] = useState(false);

  console.log(isModalOpened);
  const {
    board,
    score,
    isChoosingSize,
    best,
    startNewGame,
    handleKeyUp,
    setIsChoosingSize,
  } = use2048(size, setIsModalOpened);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  console.log(isModalOpened);

  return (
    <div className="border-red-500 m-16">
      {isModalOpened && (
        <Modal
          startNewGame={startNewGame}
          setIsModalOpened={setIsModalOpened}
        ></Modal>
      )}
      <Header
        score={score}
        best={best}
        setIsModalOpened={setIsModalOpened}
      />
      {!isChoosingSize && <Board board={board} />}
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
