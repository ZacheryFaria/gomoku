import {
  PLACE_PIECE,
  RESET_BOARD,
  CHANGE_PLAYER,
  CHANGE_TIME
} from "./actions";
import store, { initialState, BoardState } from "./store";
import { act } from "react-dom/test-utils";

interface PlacePieceAction {
  type: typeof PLACE_PIECE;
  payload: {
    index: number;
    player: number;
  };
}

interface ResetBoardAction {
  type: typeof RESET_BOARD;
  payload: {};
}

interface ChangePlayerAction {
  type: typeof CHANGE_PLAYER;
  payload: {};
}

interface TimeChangeAction {
  type: typeof CHANGE_TIME;
  payload: {
    index: number;
  };
}

export function placePiece(index: number, player: number) {
  store.dispatch({
    type: PLACE_PIECE,
    payload: {
      index: index,
      player: player
    }
  });
}

export function changePlayer() {
  store.dispatch({
    type: CHANGE_PLAYER,
    payload: {}
  });
}

export function resetBoard() {
  store.dispatch({
    type: RESET_BOARD,
    payload: {}
  });
}

export function addSecond(index: number) {
  store.dispatch({
    type: CHANGE_TIME,
    payload: {
      index: index
    }
  });
}

export function rootReducer(
  state: BoardState = initialState,
  action:
    | ChangePlayerAction
    | PlacePieceAction
    | ResetBoardAction
    | TimeChangeAction
): BoardState {
  let b: BoardState = Object.assign({}, state);
  switch (action.type) {
    case PLACE_PIECE:
      b.board[action.payload.index] = action.payload.player;
      return {
        ...b,
        board: b.board
      };
    case CHANGE_PLAYER:
      return {
        ...state,
        currentPlayer: state.currentPlayer === 1 ? 0 : 1
      };
    case RESET_BOARD:
      b.currentPlayer = 0;
      for (var i = 0; i < b.board.length; i++) {
        b.board[i] = undefined;
      }
      return {
        ...b,
        board: b.board
      };
    case CHANGE_TIME:
      b.seconds[action.payload.index] += 1;
      return {
        ...b
      };
    default:
      return state;
  }
}
