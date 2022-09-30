import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Minesweeper } from "./components/Minesweeper";

function App() {
  const basicMines = [
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "X",
    "X",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "X",
  ];

  const [gameOver, setGameOver] = useState(false);

  return (
    <div className="app">
      <h1>MINESWEEPER</h1>
      <div className="layout">
        {gameOver && <h1>GAME OVER</h1>}
        <Minesweeper gameArray={basicMines} setGameOver={setGameOver} />
      </div>
    </div>
  );
}

export default App;
