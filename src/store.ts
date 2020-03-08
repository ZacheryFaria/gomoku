import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducer";
import { boardSquares } from "./components/Constants";
import thunk from "redux-thunk";

export interface Player {
  id: number;
  isHuman: boolean;
}

export interface BoardState {
  board: Array<number>;
  currentPlayer: number;
  players: Array<Player>;
  seconds: Array<number>;
}

export const initialState: BoardState = {
  board: [...Array<number>((boardSquares + 1) * (boardSquares + 1))].map(
    () => -1
  ),
  players: [
    { id: 0, isHuman: true },
    { id: 1, isHuman: true }
  ],
  currentPlayer: 0,
  seconds: Array<number>(0, 0)
};

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;
