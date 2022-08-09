import { useEffect, useState } from "react";
import { cloneDeep } from "lodash";

const use2048 = (size, setIsModalOpened) => {
  const [board, setBoard] = useState(() => {
    const newBoard = new Array(size);
    for (let i = 0; i < size; i++) {
      let newRow = new Array(size);
      for (let j = 0; j < size; j++) {
        newRow[j] = 0;
      }
      newBoard[i] = newRow;
    }
    let search = true;
    while (search) {
      const index1 = Math.floor(Math.random() * newBoard.length);
      const index2 = Math.floor(Math.random() * newBoard.length);
      if (newBoard[index1][index2] === 0) {
        newBoard[index1][index2] = Math.random() > 0.05 ? 2 : 4;
        search = false;
      }
    }

    search = true;
    while (search) {
      const index1 = Math.floor(Math.random() * newBoard.length);
      const index2 = Math.floor(Math.random() * newBoard.length);
      if (newBoard[index1][index2] === 0) {
        newBoard[index1][index2] = Math.random() > 0.05 ? 2 : 4;
        search = false;
      }
    }
    return newBoard;
  });
  const [score, setScore] = useState(0);
  const [isChoosingSize, setIsChoosingSize] = useState(true);

  useEffect(() => {
    setBoard(() => {
      const newBoard = new Array(size);
      for (let i = 0; i < size; i++) {
        let newRow = new Array(size);
        for (let j = 0; j < size; j++) {
          newRow[j] = 0;
        }
        newBoard[i] = newRow;
      }
      let search = true;
      while (search) {
        const index1 = Math.floor(Math.random() * newBoard.length);
        const index2 = Math.floor(Math.random() * newBoard.length);
        if (newBoard[index1][index2] === 0) {
          newBoard[index1][index2] = Math.random() > 0.05 ? 2 : 4;
          search = false;
        }
      }

      search = true;
      while (search) {
        const index1 = Math.floor(Math.random() * newBoard.length);
        const index2 = Math.floor(Math.random() * newBoard.length);
        if (newBoard[index1][index2] === 0) {
          newBoard[index1][index2] = Math.random() > 0.05 ? 2 : 4;
          search = false;
        }
      }
      return newBoard;
    });
  }, [size, isChoosingSize]);

  function generateNewTile(board) {
    let search = true;
    let grid = cloneDeep(board);
    while (search) {
      const index1 = Math.floor(Math.random() * board.length);
      const index2 = Math.floor(Math.random() * board.length);
      if (grid[index1][index2] === 0) {
        grid[index1][index2] = Math.random() > 0.05 ? 2 : 4;
        search = false;
      }
    }
    return grid;
  }

  function handleKeyUp({ key }) {
    if (key === "ArrowRight") {
      swipeRight();
    }
    if (key === "ArrowDown") {
      swipeDown();
    }
    if (key === "ArrowLeft") {
      swipeLeft();
    }
    if (key === "ArrowUp") {
      swipeUp();
    }
  }

  function swipeLeft() {
    let oldGrid = board;
    let newGrid = cloneDeep(board);

    for (let i = 0; i < oldGrid.length; i++) {
      let row = newGrid[i];
      row = combineRowLeft(row);
      newGrid[i] = row;
    }

    if (JSON.stringify(oldGrid) !== JSON.stringify(newGrid)) {
      newGrid = generateNewTile(newGrid);
    }

    setBoard(newGrid);
  }

  function swipeRight() {
    let oldGrid = board;
    let newGrid = cloneDeep(board);
    for (let i = 0; i < oldGrid.length; i++) {
      let row = newGrid[i];
      newGrid[i] = combineRowRight(row);
    }
    if (JSON.stringify(oldGrid) !== JSON.stringify(newGrid)) {
      newGrid = generateNewTile(newGrid);
    }
    setBoard(newGrid);
  }

  function swipeUp() {
    let oldGrid = board;
    let newGrid = cloneDeep(board);

    for (let i = 0; i < newGrid.length; i++) {
      let row = [];
      for (let j = 0; j < newGrid.length; j++) {
        row.push(newGrid[j][i]);
      }
      row = combineRowLeft(row);
      for (let j = 0; j < newGrid.length; j++) {
        newGrid[j][i] = row[j];
      }
    }
    if (JSON.stringify(oldGrid) !== JSON.stringify(newGrid)) {
      newGrid = generateNewTile(newGrid);
    }
    setBoard(newGrid);
  }

  function swipeDown() {
    let oldGrid = board;
    let newGrid = cloneDeep(board);
    for (let i = 0; i < oldGrid.length; i++) {
      let row = [];
      for (let j = 0; j < newGrid.length; j++) {
        row.push(newGrid[j][i]);
      }
      row = combineRowRight(row);
      for (let j = 0; j < newGrid.length; j++) {
        newGrid[j][i] = row[j];
      }
    }
    if (JSON.stringify(oldGrid) !== JSON.stringify(newGrid)) {
      newGrid = generateNewTile(newGrid);
    }
    setBoard(newGrid);
  }

  function combineRowRight(row) {
    let slow = row.length - 1;
    let fast = slow - 1;
    while (slow > 0) {
      if (fast === -1) {
        slow--;
        fast = slow - 1;
        continue;
      }
      if (row[slow] === 0 && row[fast] === 0) {
        fast -= 1;
      } else if (row[slow] === 0 && row[fast] !== 0) {
        row[slow] = row[fast];
        row[fast] = 0;
        fast--;
      } else if (row[slow] !== 0 && row[fast] === 0) {
        fast--;
      } else if (row[slow] !== 0 && row[slow] !== 0) {
        if (row[slow] === row[fast]) {
          row[slow] += row[fast];
          addScore(row[slow]);
          row[fast] = 0;
          slow--;
          fast = slow - 1;
        } else {
          slow--;
          fast = slow - 1;
        }
      }
    }
    return row;
  }

  function combineRowLeft(row) {
    let slow = 0;
    let fast = slow + 1;

    while (slow < 3) {
      if (fast === row.length) {
        slow++;
        fast = slow + 1;
        continue;
      }
      if (row[slow] === 0 && row[fast] === 0) {
        fast++;
      } else if (row[slow] === 0 && row[fast] !== 0) {
        row[slow] = row[fast];
        row[fast] = 0;
        fast++;
      } else if (row[slow] !== 0 && row[fast] === 0) {
        fast++;
      } else if (row[slow] !== 0 && row[fast] !== 0) {
        if (row[slow] === row[fast]) {
          row[slow] += row[fast];
          addScore(row[slow]);
          row[fast] = 0;
          slow++;
          fast += 1;
        } else {
          slow++;
          fast = slow + 1;
        }
      }
    }
    return row;
  }

  function addScore(scoreToAdd) {
    setScore((prev) => prev + scoreToAdd);
  }

  function startNewGame(setIs) {
    setScore(0);
    setIsChoosingSize(true);
  }

  return {
    board,
    score,
    isChoosingSize,
    startNewGame,
    handleKeyUp,
    setIsChoosingSize,
  };
};

export default use2048;
