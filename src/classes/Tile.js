class Tile {
  constructor(index, color, number) {
    this.index = index;
    this.color = color;
    this.number = number;
  }

  canMerge(tile) {
    return this.number === tile.number ? true : false;
  }
}

export default Tile;
