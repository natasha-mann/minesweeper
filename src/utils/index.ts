export const getSurroundingSpaceIndices = (
  index: number,
  arrLength: number
): number[] => {
  let surroundingIndices = [
    index - 6,
    index - 5,
    index - 4,
    index + 1,
    index + 6,
    index + 5,
    index + 4,
    index - 1,
  ];

  const squareRoot = Math.sqrt(arrLength);

  if ((index + 1) % squareRoot === 0) {
    surroundingIndices = surroundingIndices.filter(
      (e) => e !== index + 6 && e !== index - 4 && e !== index + 1
    );
  }

  if (index % squareRoot === 0 || index === 0) {
    surroundingIndices = surroundingIndices.filter(
      (e) => e !== index - 6 && e !== index + 4 && e !== index - 1
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
