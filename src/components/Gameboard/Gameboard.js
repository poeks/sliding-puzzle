import React, { useState } from 'react';
import './Gameboard.css'
import Piece from '../Piece/Piece.js'


const Gameboard = () => {

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
      const newPositions = {...positions}
      newPositions[id] = emptyPosition
      setPositions(newPositions)
      
      const currentPositionOfPiece = positions[id]
      setEmptyPosition(currentPositionOfPiece)
    }
  
    const getPiece = ([id, position]) => {
      return (
        <Piece key={id} id={id} position={position} onClick={onClickPiece}/>
      )
    }
  
    return (
      <div className="gameboard" >
        <div className="pieces-wrapper">
          {Object.entries(positions).map(getPiece).flat()}
        </div>
      </div>
    )
  }

export default Gameboard;
