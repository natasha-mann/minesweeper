import React from "react";
import { generateMines } from "../utils/generateMines";
import { Button } from "./Button";
import style from "./start.module.css";

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

  const levels = [
    {
      label: "Beginner (5x5)",
      level: "25",
    },
    {
      label: "Intermediate (7x7)",
      level: "49",
    },
    {
      label: "Expert (10x10)",
      level: "100",
    },
    {
      label: "Master (12x12)",
      level: "144",
    },
  ];

  return (
    <div className={style.startContainer}>
      <h2>Choose a level to start a new game</h2>
      <hr />
      <div className={style.btnContainer}>
        {levels.map(({ level, label }) => (
          <Button
            handleSelectLevel={handleSelectLevel}
            level={level}
            label={label}
            key={level}
          />
        ))}
      </div>
    </div>
  );
};
