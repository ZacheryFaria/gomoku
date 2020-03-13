import {
  CHANGE_PLAYER,
  CHANGE_TIME,
  PLACE_PIECE,
  RESET_BOARD
} from "./actions";
import store, { initialState, BoardState } from "./store";
import { Dispatch } from "redux";
import { placePiece } from "./components/Board";

interface PlacePieceAction {
  type: typeof PLACE_PIECE;
  payload: { index: number; player: number };
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
  payload: { index: number };
}

export function placePieceAction(index: number, player: number) {
  store.dispatch({
    type: PLACE_PIECE,
    payload: { index: index, player: player }
  });
}

export function changePlayer() {
  store.dispatch({ type: CHANGE_PLAYER, payload: {} });
}

export function resetBoard() {
  store.dispatch({ type: RESET_BOARD, payload: {} });
}

export function addSecond(index: number) {
  return async function(dispatch: Dispatch) {
    dispatch({
      type: CHANGE_TIME,
      payload: {
        index: index
      }
    });
  };
}

function resetBoardReducer(state: BoardState) {
  state.currentPlayer = 0;
  state.timePassed = [0, 0];
  // FIXME: this breaks when the board is non-empty
  state.board = state.board.map(() => -1);
  return {
    ...state
  };
}

function changePlayerReducer(state: BoardState): BoardState {
  state.currentPlayer = state.currentPlayer === 1 ? 0 : 1;

  return { ...state };
}

function placePieceReducer(
  state: BoardState,
  action: PlacePieceAction
): BoardState {
  if (action.payload.player !== state.currentPlayer) {
    return state;
  }

  var newState = placePiece(action.payload.index, action.payload.player, state);
  if (newState.err === "") newState.currentPlayer ^= 1;

  return { ...newState };
}

function changeTimeReducer(
  state: BoardState,
  action: TimeChangeAction
): BoardState {
  state.timePassed = [...state.timePassed];
  state.timePassed[action.payload.index]++;

  return { ...state, timePassed: state.timePassed };
}

export function rootReducer(
  state: BoardState = initialState,
  action:
    | ChangePlayerAction
    | PlacePieceAction
    | ResetBoardAction
    | TimeChangeAction
): BoardState {
  switch (action.type) {
    case PLACE_PIECE:
      return placePieceReducer(state, action);
    case CHANGE_PLAYER:
      return changePlayerReducer(state);
    case RESET_BOARD:
      return resetBoardReducer(state);
    case CHANGE_TIME:
      return changeTimeReducer(state, action);
    default:
      return state;
  }
}
