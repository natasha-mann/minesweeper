import React from "react";
import { generateMines } from "../utils/generateMines";

interface StartProps {
  setInPlay: React.Dispatch<React.SetStateAction<boolean>>;
  setMines: React.Dispatch<React.SetStateAction<string[]>>;
}

export const Start = ({ setInPlay, setMines }: StartProps) => {
  const handleSelectLevel = (e: React.MouseEvent) => {
    const selectedLevel = Number(e.currentTarget.getAttribute("data-id"));
    setInPlay(true);
    const mines = generateMines(selectedLevel);
    setMines(mines);
  };

  return (
    <div>
      <h2> Which level would you like to play?</h2>
      <button data-id="25" onClick={handleSelectLevel}>
        Beginner (5x5){" "}
      </button>
      <button data-id="49" onClick={handleSelectLevel}>
        Intermediate (7x7){" "}
      </button>
      <button data-id="100" onClick={handleSelectLevel}>
        Expert (10x10)
      </button>
      <button data-id="144" onClick={handleSelectLevel}>
        Master (12x12){" "}
      </button>
    </div>
  );
};
