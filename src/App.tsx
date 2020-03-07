import React from "react";
import Board from "./components/Board";
import Timer from "./components/Timer";
import "./App.css";

function App() {
  document.title = "gomoku";
  return (
    <div className="App">
      <Timer />
      <Board />
    </div>
  );
}

export default App;
