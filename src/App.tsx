import React from "react";
import Board from "./components/Board";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

function App() {
  document.title = "gomoku";
  return (
    <Provider store={store}>
      <div className="App">
        <Board />
      </div>
    </Provider>
  );
}

export default App;
