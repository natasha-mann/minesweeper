import { useState } from "react";

import "./App.css";
import { Minesweeper } from "./components/Minesweeper";
import { GameOver } from "./components/GameOver";
import { Start } from "./components/Start";

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [inPlay, setInPlay] = useState(false);
  const [mines, setMines] = useState<string[]>([]);

  return (
    <div className="app">
      <div className="header">
        <h1>MINESWEEPER</h1>
      </div>

      <div className="layout">
        {!inPlay && <Start setInPlay={setInPlay} setMines={setMines} />}
        {!gameOver && inPlay && mines.length && (
          <Minesweeper gameArray={mines} setGameOver={setGameOver} />
        )}
        {gameOver && <GameOver />}
      </div>
    </div>
  );
}

export default App;
