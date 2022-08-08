let grid = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const boardElement = document.querySelector(".board");

window.addEventListener("keyup", handleKeyup);

function handleKeyup({ key }) {
  console.log(key);
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
  let oldGrid = grid;
  let newGrid = _.cloneDeep(grid);

  for (let i = 0; i < 4; i++) {
    let row = newGrid[i];
    row = combineRowLeft(row);
    newGrid[i] = row;
  }
  grid = newGrid;
  if (JSON.stringify(oldGrid) !== JSON.stringify(newGrid)) {
    generateNew();
  }
  render();
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
  console.log(row);
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

function swipeRight() {
  let oldGrid = grid;
  let newGrid = _.cloneDeep(grid);
  for (let i = 0; i < 4; i++) {
    let row = newGrid[i];
    newGrid[i] = combineRowRight(row);
  }
  grid = newGrid;
  if (JSON.stringify(oldGrid) !== JSON.stringify(newGrid)) {
    generateNew();
  }
  render();
}

function swipeUp() {
  let oldGrid = grid;
  let newGrid = _.cloneDeep(grid);

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
  grid = newGrid;
  if (JSON.stringify(oldGrid) !== JSON.stringify(newGrid)) {
    generateNew();
  }
  render();
}

function swipeDown() {
  let oldGrid = grid;
  let newGrid = _.cloneDeep(grid);
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
  grid = newGrid;
  if (JSON.stringify(oldGrid) !== JSON.stringify(newGrid)) {
    generateNew();
  }
  render();
}

generateNew();
generateNew();
render();
