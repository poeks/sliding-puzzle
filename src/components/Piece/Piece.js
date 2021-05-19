import './Piece.css';


const calculateCoords = (position, boardWidth = 3, boardHeight = 3) => {

    if (position > boardWidth * boardHeight) {
      throw new Error(`Position ${position} is not a valid position (max = ${boardWidth * boardHeight})`)
    }
  
    const pieceSideInPixels = 100;
    const coordinatesOfPositions = {
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
    return coordinatesOfPositions[position]
  }

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

export default Piece;
