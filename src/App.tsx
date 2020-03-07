import React from "react";
import Board from "./components/Board";
import { Provider } from "react-redux";
import store from "./store";
import Timer from "./components/Timer";
import "./App.css";

function App() {
  document.title = "gomoku";
  return (
    <Provider store={store}>
      <div className="App">
        <Timer />
        <Board />
      </div>
    </Provider>
  );
}

export default App;
