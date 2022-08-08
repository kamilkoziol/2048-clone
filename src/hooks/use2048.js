import { useEffect, useState } from "react";
import { cloneDeep } from "lodash";
import { clear } from "@testing-library/user-event/dist/clear";

const use2048 = (size) => {
  const [board, setBoard] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  const [score, setScore] = useState(0);

  useEffect(() => {
    let initBoard = generateNewTile(board);
    initBoard = generateNewTile(initBoard);
    setBoard(initBoard);
  }, []);

  const generateNewTile = (board) => {
    let search = true;
    let grid = cloneDeep(board);
    while (search) {
      const index1 = Math.floor(Math.random() * 4);
      const index2 = Math.floor(Math.random() * 4);
      if (grid[index1][index2] === 0) {
        grid[index1][index2] = Math.random() > 0.05 ? 2 : 4;
        search = false;
      }
    }
    return grid;
  };

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

    for (let i = 0; i < 4; i++) {
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
    for (let i = 0; i < 4; i++) {
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

    for (let i = 0; i < 4; i++) {
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
    for (let i = 0; i < 4; i++) {
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
      if (fast === 4) {
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

  function startNewGame() {
    setScore(0);
    let clearBoard = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    clearBoard = generateNewTile(clearBoard);
    clearBoard = generateNewTile(clearBoard);
    setBoard(clearBoard);
  }

  return { board, score, startNewGame, handleKeyUp };
};

export default use2048;
