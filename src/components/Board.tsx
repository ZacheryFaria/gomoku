import React, { useEffect, useState, useRef } from "react";
import Piece from "./Piece";
import { boardSize, cellSize } from "./Constants";

import Cell from "./Cell";

const Board: React.FC<{}> = () => {
  const [currentPlayer, setCurrentPlayer] = useState(1);

  var pieces = [];

  var cells = [];

  var circles = [];

  for (var i = 0; i < boardSize * boardSize; i++) {
    cells.push(<Cell id={i} key={i} />);

    let x = i % boardSize;
    let y = Math.floor(i / boardSize);

    if (x % 6 === 3 && y % 6 === 3) {
      circles.push(
        <circle
          key={i}
          cx={x * cellSize}
          cy={y * cellSize}
          r={cellSize / 8}
          fill="black"
        />
      );
    }
  }

  for (var i = 0; i < (boardSize + 1) * (boardSize + 1); i++) {
    let x = i % (boardSize + 1);
    let y = Math.floor(i / (boardSize + 1));
    pieces.push(
      <Piece x={x} y={y} id={currentPlayer} changePlayer={switchPlayer} />
    );
  }

  function switchPlayer() {
    setCurrentPlayer(currentPlayer == 0 ? 1 : 0);
  }

  return (
    <div className="BoardDiv">
      <svg id="board" className="Board" viewBox="0 0 1000 1000">
        {cells}
        {circles}
        {pieces}
      </svg>
    </div>
  );
};

export default Board;
