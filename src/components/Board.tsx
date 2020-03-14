import React from "react";
import Piece from "./Piece";
import {
  boardSquares,
  boardSize,
  cellSize,
  boardMargin,
  cellColor,
  numDots
} from "./Constants";

import { resetBoard } from "../reducer";

import Cell from "./Cell";
import { connect } from "react-redux";
import { BoardState } from "../store";

interface Props {
  board: Array<number>;
  currentPlayer: number;
  resetBoard: () => void;
}

const Board: React.FC<Props> = props => {
  var pieces = [];

  var cells = [];

  var circles = [];

  for (var i = 0; i < boardSquares * boardSquares; i++) {
    let x: number = boardMargin + (i % boardSquares) * cellSize;
    let y: number = boardMargin + Math.floor(i / boardSquares) * cellSize;

    cells.push(<Cell id={i} x={x} y={y} size={cellSize} key={i} />);

    const mod = Math.floor(boardSquares / numDots);
    const res = Math.floor(mod / 2);

    if (
      (i % boardSquares) % mod === res &&
      Math.floor(i / boardSquares) % mod === res
    ) {
      circles.push(
        <circle key={i} cx={x} cy={y} r={cellSize / 8} fill="black" />
      );
    }
  }

  for (i = 0; i < (boardSquares + 1) * (boardSquares + 1); i++) {
    let x = boardMargin + (i % (boardSquares + 1)) * cellSize;
    let y = boardMargin + Math.floor(i / (boardSquares + 1)) * cellSize;

    pieces.push(<Piece x={x} y={y} radius={cellSize / 2.2} id={i} key={i} />);
  }

  return (
    <div className="BoardDiv">
      <svg
        id="board"
        className="Board"
        viewBox={`0 0 ${boardSize} ${boardSize}`}
      >
        <rect
          x="0"
          y="0"
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

/**
 * Place a piece on a board.  Modifies board,captures,winner
 * @param idx index of state.board to place piece
 * @param player player id
 * @param state current game state
 * @returns new board state on success
 *          OR old board state with error message on failure
 */
function placePiece(
  idx: number,
  player: number,
  state: BoardState
): BoardState {
  function RVError(err: string, state: BoardState): BoardState {
    var newState = { ...state };
    newState.err = err;
    return newState;
  }

  // validate move
  if (state.board[idx] === -1) {
    // is valid move
    var newBoard = [...state.board];
    newBoard[idx] = player;
    var newState = { ...state };
    newState.board = newBoard;
    newState.err = "";
    return newState;
  } else {
    return RVError("bad index", state);
  }
}

export { placePiece };

const mapStateToProps = state => {
  return {
    board: state.board,
    currentPlayer: state.currentPlayer
  };
};

const mapDispatchToProps = () => {
  return {
    resetBoard
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
