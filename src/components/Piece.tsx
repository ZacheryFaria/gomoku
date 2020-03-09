import React from "react";
import { connect } from "react-redux";
import { placePiece } from "../reducer";
import { Player, BoardState } from "../store";

interface Props {
  x: number;
  y: number;
  radius: number;
  id: number;
  placePiece: (i: number, user: number) => void;
  currentPlayer: Player;
  selected: number;
}

const Piece: React.FC<Props> = props => {
  let opacity: string;

  let color: string;

  if (props.selected === -1) {
    color = props.currentPlayer.id === 0 ? "black" : "white";
    opacity = "0%";
  } else {
    color = props.selected === 0 ? "black" : "white";
    opacity = "100%";
  }

  function clicked() {
    if (props.currentPlayer.isHuman) {
      props.placePiece(props.id, props.currentPlayer.id);
    }
  }

  return (
    <circle
      onClick={() => clicked()}
      id={`${props.x}-${props.y}`}
      className={
        props.selected !== -1 || !props.currentPlayer.isHuman ? "" : "Piece"
      }
      cx={props.x}
      cy={props.y}
      r={props.radius}
      fill={color}
      opacity={opacity}
    />
  );
};

const mapStateToProps = (state: BoardState, props) => {
  return {
    selected: state.board[props.id],
    currentPlayer: state.players[state.currentPlayer]
  };
};

const mapDispatchToProps = () => {
  return {
    placePiece
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Piece);
