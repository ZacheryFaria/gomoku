import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducer";
import { boardSquares } from "./components/Constants";
import thunk from "redux-thunk";

export interface BoardState {
  board: Array<number>;
  currentPlayer: number;
  seconds: Array<number>;
}

export const initialState: BoardState = {
  board: Array<number>((boardSquares + 1) * (boardSquares + 1)),
  currentPlayer: 0,
  seconds: Array<number>(0, 0)
};

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;
