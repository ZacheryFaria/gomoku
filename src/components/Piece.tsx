import React from "react";
import { connect } from "react-redux";
import { placePiece, changePlayer } from "../reducer";

interface Props {
  x: number;
  y: number;
  radius: number;
  id: number;
  user: number;
  placePiece: (i: number, user: number) => void;
  changePlayer: () => void;
  currentPlayer: number;
  selected: number;
}

const Piece: React.FC<Props> = props => {
  let opacity: string;

  let color: string;

  if (props.selected === undefined) {
    color = props.currentPlayer === 0 ? "black" : "white";
    opacity = "0%";
  } else {
    color = props.selected === 0 ? "black" : "white";
    opacity = "100%";
  }

  function clicked() {
    if (props.selected === undefined) {
      //setOpacity("100%");
      //setPlaced(true);
      //placedPlayer.current = props.id;
      //props.changePlayer();
      props.placePiece(props.id, props.user);
      props.changePlayer();
    }
  }

  return (
    <circle
      onClick={() => clicked()}
      id={`${props.x}-${props.y}`}
      className={props.selected !== undefined ? "" : "Piece"}
      cx={props.x}
      cy={props.y}
      r={props.radius}
      fill={color}
      opacity={opacity}
    />
  );
};

const mapStateToProps = (state, props) => {
  return {
    selected: state.board[props.id],
    user: state.currentPlayer,
    currentPlayer: state.currentPlayer
  };
};

const mapDispatchToProps = () => {
  return {
    placePiece,
    changePlayer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Piece);
