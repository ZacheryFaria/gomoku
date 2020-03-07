import React, { useState } from "react";
import Piece from "./Piece";
import { boardSquares, boardSize, cellSize, boardMargin, cellColor } from "./Constants";

import Cell from "./Cell";

const Board: React.FC<{}> = () => {
  const [currentPlayer, setCurrentPlayer] = useState(1);

  var pieces = [];

  var cells = [];

  var circles = [];

  for (var i = 0; i < boardSquares * boardSquares; i++) {
    let x = boardMargin + (i % boardSquares * cellSize);
    let y = boardMargin + (Math.floor(i / boardSquares) * cellSize);

    console.log(x,y);

    cells.push(<Cell id={i} x={x} y={y} size={cellSize} key={i} />);

    if ((i%boardSquares) % 6 === 3 && Math.floor(i/boardSquares) % 6 === 3) {
      circles.push(
        <circle
          key={i}
          cx={x}
          cy={y}
          r={cellSize / 8}
          fill="black"
        />
      );
    }
  }

  for (i = 0; i < (boardSquares + 1) * (boardSquares + 1); i++) {
    let x = boardMargin + (i % (boardSquares+1) * cellSize);
    let y = boardMargin + (Math.floor(i / (boardSquares+1)) * cellSize);

    pieces.push(
      <Piece x={x} y={y} radius={cellSize / 2.2} id={currentPlayer} changePlayer={switchPlayer} />
    );
  }

  function switchPlayer() {
    setCurrentPlayer(currentPlayer === 0 ? 1 : 0);
  }

  return (
    <div className="BoardDiv">
      <svg id="board" className="Board" viewBox={`0 0 ${boardSize} ${boardSize}`}>
        <rect
          x='0'
          y='0'
          width={boardSize}
          height={boardSize}
          fill={cellColor}
          stroke={cellColor}
        />
        {cells}
        {circles}
        {pieces}
      </svg>
    </div>
  );
};

export default Board;
