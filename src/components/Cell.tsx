import React from "react";
import { cellColor } from "./Constants";

interface Props {
  id: number;
  x: number;
  y: number;
  size: number;
}

const Cell: React.FC<Props> = props => {
  let x = props.x;
  let y = Math.floor(props.y);

  return (
    <rect
      id={`${props.id}c`}
      x={x}
      y={y}
      width={props.size}
      height={props.size}
      fill={cellColor}
      stroke="black"
      strokeWidth="1.25"
    />
  );
};

export default Cell;
