import React from "react";
import Game from "./components/Game";
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
        <Game />
      </div>
    </Provider>
  );
}

export default App;
