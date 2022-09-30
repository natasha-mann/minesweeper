import React, { useState } from "react";
import { minesweeper } from "../utils";
import styles from "./minesweeper.module.css";
import bombImg from "../assets/bomb.png";

interface MinesweeperProps {
  gameArray: string[];
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Minesweeper = ({ gameArray, setGameOver }: MinesweeperProps) => {
  const [bomb, setBomb] = useState(false);
  const gameResult = minesweeper(gameArray);

  const displayResult = (e: React.MouseEvent) => {
    const selectedSpace = e.currentTarget;
    const i = e.currentTarget.getAttribute("data-id");
    const currentIndex = Number(i);

    if (gameResult[currentIndex] === "X") {
      setBomb(true);
      selectedSpace.setAttribute("class", `${styles.selected} ${styles.bomb}`);

      const image = document.createElement("img");
      image.setAttribute("src", bombImg);
      image.setAttribute("class", styles.image);
      selectedSpace.appendChild(image);
      setTimeout(() => {
        setGameOver(true);
      }, 3000);
    } else if (gameResult[currentIndex] === "0") {
      // set to selected style, but also any other adjacent squares which are 0 should be cleared
    } else {
      selectedSpace.setAttribute("class", `${styles.selected} ${styles.safe}`);
      selectedSpace.textContent = gameResult[currentIndex];
    }
  };

  return (
    <div className={styles.wrapper}>
      {gameResult.map((space: string, index: number) => {
        return (
          <div
            className={styles.box}
            onClick={!bomb ? displayResult : undefined}
            data-id={index}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};
