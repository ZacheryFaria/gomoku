import React, { useEffect } from "react";
import { boardSize, cellSize } from "./Constants";

interface Props {
  id: number;
}

const Cell: React.FC<Props> = props => {
  let x = props.id % boardSize;
  let y = Math.floor(props.id / boardSize);

  return (
    <rect
      id={`${props.id}c`}
      x={x * cellSize}
      y={y * cellSize}
      width={cellSize}
      height={cellSize}
      fill="#e5b773"
      stroke="black"
      strokeWidth="1.25"
    />
  );
};

export default Cell;
