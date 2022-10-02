import React, { useState } from "react";
import { getSurroundingSpaceIndices, minesweeper } from "../utils";
import styles from "./minesweeper.module.css";
import bombImg from "../assets/bomb.png";
import flagImg from "../assets/red-flag.png";

interface MinesweeperProps {
  gameArray: string[];
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Minesweeper = ({ gameArray, setGameOver }: MinesweeperProps) => {
  const [bomb, setBomb] = useState(false);
  const gameResult = minesweeper(gameArray);

  const setWrapperClass = () => {
    const wrapperSize = `wrapper${gameArray.length}`;
    return `${styles.wrapper} ${styles[wrapperSize]}`;
  };

  const setBombSpace = (space: Element) => {
    space.setAttribute("class", `${styles.selected} ${styles.bomb}`);
    setBomb(true);

    const image = document.createElement("img");
    image.setAttribute("src", bombImg);
    image.setAttribute("class", styles.bombImg);
    space.appendChild(image);
    setTimeout(() => {
      setGameOver(true);
    }, 3000);
  };

  const setSurroundingSpaces = (space: number, result: string) => {
    const surroundingSpace = document.querySelector(`[data-id="${space}"]`)!;

    if (result === "X") {
      setBombSpace(surroundingSpace);
      return;
    }

    surroundingSpace.setAttribute("class", `${styles.selected} ${styles.safe}`);

    if (result === "0") {
      const surroundingIndices = getSurroundingSpaceIndices(
        space,
        gameArray.length
      );

      surroundingIndices.forEach((e) => {
        const surroundingSpace = document.querySelector(`[data-id="${e}"]`)!;

        if (
          !surroundingSpace.classList.contains(`${styles.selected}`) &&
          gameResult[e] !== "X"
        ) {
          setSurroundingSpaces(e, gameResult[e]);
        }
      });
    } else {
      surroundingSpace.textContent = gameResult[space];
    }
  };

  const displayResult = (e: React.MouseEvent) => {
    const selectedSpace = e.currentTarget;

    if (selectedSpace.classList.contains(`${styles.flagged}`)) {
      return;
    }

    const i = e.currentTarget.getAttribute("data-id");
    const currentIndex = Number(i);

    if (gameResult[currentIndex] === "X") {
      setBombSpace(selectedSpace);
      return;
    }

    if (gameResult[currentIndex] === "0") {
      selectedSpace.setAttribute("class", `${styles.selected} ${styles.safe}`);

      const surroundingIndices = getSurroundingSpaceIndices(
        currentIndex,
        gameArray.length
      );

      const surroundingSpaces = surroundingIndices.map((e) => {
        return { result: gameResult[e], surroundingIndex: e };
      });

      surroundingSpaces.forEach(({ result, surroundingIndex }) => {
        if (result === "0") {
          setSurroundingSpaces(surroundingIndex, result);
        }
      });
    } else {
      selectedSpace.setAttribute("class", `${styles.selected} ${styles.safe}`);
      selectedSpace.textContent = gameResult[currentIndex];
    }
  };

  const toggleFlag = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("FLAGGED");
    const selectedSpace = e.currentTarget;

    if (selectedSpace.hasChildNodes()) {
      selectedSpace.removeChild(selectedSpace.getElementsByTagName("img")[0]);
      selectedSpace.setAttribute("class", `${styles.box}`);
    } else {
      selectedSpace.setAttribute(
        "class",
        `${styles.selected} ${styles.flagged}`
      );
      const image = document.createElement("img");
      image.setAttribute("src", flagImg);
      image.setAttribute("class", styles.flagImg);
      selectedSpace.appendChild(image);
    }
  };

  return (
    <div className={setWrapperClass()}>
      {gameResult.map((space: string, index: number) => {
        return (
          <div
            className={styles.box}
            onClick={!bomb ? displayResult : undefined}
            onContextMenu={toggleFlag}
            data-id={index}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};
