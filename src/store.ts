import { createStore } from "redux";
import { rootReducer } from "./reducer";
import { boardSquares } from "./components/Constants";

export interface BoardState {
  board: Array<number>;
  currentPlayer: number;
}

export const initialState: BoardState = {
  board: Array<number>((boardSquares + 1) * (boardSquares + 1)),
  currentPlayer: 0
};

const store = createStore(rootReducer, initialState);

export default store;
