export const generateMines = (level: number) => {
  let mineNumber = Math.sqrt(level);

  if (level === 144) {
    mineNumber += Math.floor(level / 5);
  }

  if (level === 100) {
    mineNumber += Math.floor(level / 10);
  }

  const arrayLength = level - mineNumber;

  const noMineArray = new Array(arrayLength).fill("-");
  const mines = new Array(mineNumber).fill("X");

  const mineArray = [...noMineArray, ...mines];

  for (let i = mineArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [mineArray[i], mineArray[j]] = [mineArray[j], mineArray[i]];
  }

  return mineArray;
};
