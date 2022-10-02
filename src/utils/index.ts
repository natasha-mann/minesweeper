export const getSurroundingSpaceIndices = (
  index: number,
  arrLength: number
): number[] => {
  const squareRoot = Math.sqrt(arrLength);

  let surroundingIndices = [
    index - (squareRoot + 1),
    index - squareRoot,
    index - (squareRoot - 1),
    index + 1,
    index + (squareRoot + 1),
    index + squareRoot,
    index + (squareRoot - 1),
    index - 1,
  ];

  if ((index + 1) % squareRoot === 0) {
    surroundingIndices = surroundingIndices.filter(
      (e) =>
        e !== index + (squareRoot + 1) &&
        e !== index - (squareRoot - 1) &&
        e !== index + 1
    );
  }

  if (index % squareRoot === 0 || index === 0) {
    surroundingIndices = surroundingIndices.filter(
      (e) =>
        e !== index - (squareRoot + 1) &&
        e !== index + (squareRoot - 1) &&
        e !== index - 1
    );
  }

  surroundingIndices = surroundingIndices.filter(
    (e) => e >= 0 && e < arrLength
  );

  return surroundingIndices;
};

export const minesweeper = (arr: string[]) => {
  return arr.map((space: string, index: number, array: string[]): string => {
    if (space === "X") {
      return "X";
    }

    let bombs = 0;

    const surroundingIndices = getSurroundingSpaceIndices(index, array.length);

    surroundingIndices.forEach((i) => {
      if (array[i] === "X") bombs += 1;
    });

    return bombs.toString();
  });
};
