import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducer";
import { boardSquares } from "./components/Constants";
import thunk from "redux-thunk";

// TODO: add pieces captured to Player, check for win condition
export interface Player {
  id: number;
  isHuman: boolean;
}

/**
 * @param timePassed time passed in (seconds*10)
 * @param captures number of pieces captured by each player
 * @param winner winnner of game.  -1 if no winner yet
 * @param err string representing error
 */
export interface BoardState {
  board: Array<number>;
  captures: Array<number>;
  winner: number;
  err: string;
  currentPlayer: number;
  players: Array<Player>;
  timePassed: Array<number>;
}

export const initialState: BoardState = {
  board: [...Array<number>((boardSquares + 1) * (boardSquares + 1))].map(
    () => -1
  ),
  captures: [0, 0],
  winner: -1,
  err: "",
  players: [
    { id: 0, isHuman: true },
    { id: 1, isHuman: true }
  ],
  currentPlayer: 0,
  timePassed: Array<number>(0, 0)
};

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;
