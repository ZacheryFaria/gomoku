import React, { useEffect } from "react";
import Board from "./Board";
import Settings from "./Settings";
import { connect } from "react-redux";
import { BoardState, Player } from "../store";
import { placePieceAction } from "../reducer";
import makeMove from "../AI";

interface Props {
  currentPlayer: Player;
  board: Array<number>;
  captures: Array<number>;
}

const Game: React.FC<Props> = props => {
  useEffect(() => {
    if (!props.currentPlayer.isHuman) {
      //ai stuff
      var moveList = makeMove(props.currentPlayer, props.board, [], 15);
      for (var i = 0; i < moveList.length; i++) {
        if (props.board[moveList[i].idx] === -1) {
          placePieceAction(moveList[i].idx, props.currentPlayer.id);
        }
      }
    }
  }, [props.currentPlayer]);

  return (
    <div className="App">
      <Board />
      <Settings />
    </div>
  );
};

const mapStateToProps = (state: BoardState) => {
  return {
    board: state.board,
    captures: state.captures,
    currentPlayer: state.players[state.currentPlayer]
  };
};

export default connect(mapStateToProps, { placePieceAction })(Game);
