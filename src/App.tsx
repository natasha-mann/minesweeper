import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Minesweeper } from "./components/Minesweeper";
import { GameOver } from "./components/GameOver";
import { Start } from "./components/Start";
import { generateMines } from "./utils/generateMines";

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [inPlay, setInPlay] = useState(false);
  const [level, setLevel] = useState(0);
  const [mines, setMines] = useState<string[]>([]);

  return (
    <div className="app">
      <h1>MINESWEEPER</h1>
      <div className="layout">
        {!inPlay && (
          <Start
            setInPlay={setInPlay}
            setLevel={setLevel}
            setMines={setMines}
          />
        )}
        {!gameOver && inPlay && mines.length && (
          <Minesweeper gameArray={mines} setGameOver={setGameOver} />
        )}
        {gameOver && <GameOver />}
      </div>
    </div>
  );
}

export default App;
