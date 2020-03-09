import React, { useEffect } from "react";
import Board from "./Board";
import { connect } from "react-redux";
import { BoardState, Player } from "../store";
import { placePiece } from "../reducer";
import makeMove from "../AI";

interface Props {
  currentPlayer: Player;
  board: Array<number>;
}

const Game: React.FC<Props> = props => {
  useEffect(() => {
    if (!props.currentPlayer.isHuman) {
      //ai stuff
      var moves = makeMove(props.currentPlayer.id, props.board, 15);
      for (var i = 0; i < moves.length; i++) {
        if (props.board[moves[i].idx] === -1) {
          placePiece(moves[i].idx, props.currentPlayer.id);
        }
      }
    }
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
