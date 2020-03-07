import React, { useEffect, useState, useRef } from "react";
import { cellSize } from "./Constants";

interface Props {
  x: number;
  y: number;
  id: number;
  changePlayer: () => void;
}

const Piece: React.FC<Props> = props => {
  const [opacity, setOpacity] = useState("0%");
  const [placed, setPlaced] = useState(false);
  const placedPlayer = useRef(0);

  let color;
  if (placed) {
    color = placedPlayer.current === 1 ? "black" : "white";
  } else {
    color = props.id === 1 ? "black" : "white";
  }

  useEffect(() => {
    let c = document.getElementById(`${props.x}-${props.y}`);
    function mouseDown(e: MouseEvent) {
      if (!placed) {
        setOpacity("100%");
        setPlaced(true);
        placedPlayer.current = props.id;
        props.changePlayer();
      }
    }

    if (c) {
      c.addEventListener("mousedown", mouseDown);
    }

    return () => {
      if (c) {
        c.removeEventListener("mousedown", mouseDown);
      }
    };
  });

  return (
    <circle
      onClick={() => setOpacity("100%")}
      id={`${props.x}-${props.y}`}
      className={placed ? "" : "Piece"}
      cx={props.x * cellSize}
      cy={props.y * cellSize}
      r={cellSize / 2.2}
      fill={color}
      opacity={opacity}
    />
  );
};

export default Piece;
