import React, { useEffect } from "react";
import Board from "./Board";
import { connect } from "react-redux";
import { BoardState, Player } from "../store";
import { placePiece } from "../reducer";

interface Props {
  currentPlayer: Player;
  board: Array<number>;
}

const Game: React.FC<Props> = props => {
  useEffect(() => {
    // console.log(props.currentPlayer);
    // if (!props.currentPlayer.isHuman) {
    //   for (var i = 0; i < props.board.length; i++) {
    //     if (props.board[i] === -1) {
    //     }
    //   }
    //   //ai stuff
    // }
  }, [props.currentPlayer]);

  return (
    <div className="App">
      <Board />
    </div>
  );
};

const mapStateToProps = (state: BoardState) => {
  return {
    board: state.board,
    currentPlayer: state.players[state.currentPlayer]
  };
};

export default connect(mapStateToProps, { placePiece })(Game);
