function calculateNeighboursRectangularBoard(position, boardWidth, boardHeight) {
  
  const topVerticalNeighbour = position - boardWidth;
  const bottomVerticalNeighbour = position + boardWidth;
  const leftHorizontalNeighbour = position - 1;
  const rightHorizontalNeighbour = position + 1;
  
  neighbours = new Set();

  if (topVerticalNeighbour > 0) {
    neighbours.add(topVerticalNeighbour)
  }

  if (bottomVerticalNeighbour <= boardWidth * boardHeight ) {
    neighbours.add(bottomVerticalNeighbour)
  }

  if ((position  - 1) % boardWidth > 0) {
    neighbours.add(leftHorizontalNeighbour)
  }
  if (position % boardWidth > 0) {
    neighbours.add(rightHorizontalNeighbour)
  }

  return neighbours;
}


module.exports = {  
  calculateNeighbours: calculateNeighboursRectangularBoard,
};
