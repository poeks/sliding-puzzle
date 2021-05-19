import './App.css';
import React, { useState } from 'react';


const Piece = ({ id, position, onClick }) => {
  const { top, left } = calculateCoords(position)
  const style = {
    top: `${top}px`,
    left: `${left}px`,
  }

  return (
    <div className="piece" style={style} onClick={() => onClick(id)}>
      {id}
    </div>
  )
}


const calculateCoords = (position, boardWidth = 3, boardHeight = 3) => {

  if (position > boardWidth * boardHeight) {
    throw new Error(`Position ${position} is not a valid position (max = ${boardWidth * boardHeight})`)
  }

  const pieceSideInPixels = 100;
  const positions = {
    1: { top: 0, left: 0 },
    2: { top: 0 * pieceSideInPixels, left: 1 * pieceSideInPixels },
    3: { top: 0 * pieceSideInPixels, left: 2 * pieceSideInPixels },
    4: { top: 1 * pieceSideInPixels, left: 0 },
    5: { top: 1 * pieceSideInPixels, left: 1 * pieceSideInPixels },
    6: { top: 1 * pieceSideInPixels, left: 2 * pieceSideInPixels },
    7: { top: 2 * pieceSideInPixels, left: 0 },
    8: { top: 2 * pieceSideInPixels, left: 1 * pieceSideInPixels },
    9: { top: 2 * pieceSideInPixels, left: 2 * pieceSideInPixels },
  }
  return positions[position]
}


const GameBoard = () => {

  const [positions, setPositions] = useState({
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
  });


  const [emptyPosition, setEmptyPosition] = useState(9);

  const onClickPiece = (id) => {
    console.log('hi, I am clicked!', id);
    console.log('current empty: ', emptyPosition)

    // get current position of the clicked piece
    let currentPosition = positions[id]

    // create new positions object and update the clicked piece
    const newPositions = {...positions}
    newPositions[id] = emptyPosition

    // set states of positions and
    setPositions(newPositions)
    setEmptyPosition(currentPosition)
    
  }

  const getPiece = ([id, position]) => {
    return (
      <Piece key={id} id={id} position={position} onClick={onClickPiece}/>
    )
  }

  return (
    <div className="board-game" >
      <div className="piece-wrapper">
        {/* Use keys for pieces? */}
        {Object.entries(positions).map(getPiece).flat()}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Sliding puzzle</div>
      </header>
      {/* <div>GameBoard1</div> */}
      {/* <GameBoard1 /> */}
      <div>GameBoard2</div>
      <GameBoard />
    </div>
  );
}

export default App;
