export const minesweeper = (arr: string[]) => {
  return arr.map(
    (space: string, index: number, array: string[]): number | string => {
      if (space === "X") {
        return "X";
      }

      const surroundingSpaces = {
        spaceRight: array[index + 1] === "X",
        spaceLeft: array[index - 1] === "X",
        spaceAbove: array[index - 5] === "X",
        spaceBelow: array[index + 5] === "X",
        topLeft: array[index - 6] === "X",
        topRight: array[index - 4] === "X",
        bottomLeft: array[index + 4] === "X",
        bottomRight: array[index + 6] === "X",
      };

      let bombs = 0;

      Object.values(surroundingSpaces).forEach((e) => {
        if (e === true) bombs += 1;
      });

      if ((index + 1) % 5 === 0) {
        if (surroundingSpaces.spaceRight) bombs -= 1;
        if (surroundingSpaces.topRight) bombs -= 1;
        if (surroundingSpaces.bottomRight) bombs -= 1;
      }

      if (index % 5 === 0) {
        if (surroundingSpaces.spaceLeft) bombs -= 1;
        if (surroundingSpaces.bottomLeft) bombs -= 1;
        if (surroundingSpaces.topLeft) bombs -= 1;
      }

      return bombs.toString();
    }
  );
};
