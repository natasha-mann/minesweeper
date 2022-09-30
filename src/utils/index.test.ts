import { minesweeper } from "./index";

describe("minesweeper", () => {
  const mines = [
    "X",
    "X",
    "X",
    "-",
    "-",
    "X",
    "-",
    "X",
    "-",
    "-",
    "X",
    "X",
    "X",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
  ];

  describe('given the space contains a "X"', () => {
    it("should return X", () => {
      const bombs = minesweeper(mines);
      expect(bombs[0]).toBe("X");
      expect(bombs[12]).toBe("X");
    });
  });

  describe('given the space contains a "-"', () => {
    it("should return 0 if all surrounding spaces are all empty", () => {
      const bombs = minesweeper(mines);
      expect(bombs[24]).toBe("0");
      expect(bombs[19]).toBe("0");
    });

    it("should return 1 if one surrounding space contains an X", () => {
      const bombs = minesweeper(mines);
      expect(bombs[18]).toBe("1");
    });

    it("should return 2 if two surrounding space contain an X", () => {
      const bombs = minesweeper(mines);
      expect(bombs[17]).toBe("2");
    });

    it("should return 8 if all surrounding spaces contain an X", () => {
      const bombs = minesweeper(mines);
      expect(bombs[6]).toBe("8");
    });

    it("should return an array containing the number of bombs for each square", () => {
      const bombs = minesweeper([
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "X",
        "X",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "X",
      ]);

      expect(bombs).toEqual([
        "0",
        "0",
        "0",
        "0",
        "0",
        "2",
        "2",
        "1",
        "0",
        "0",
        "X",
        "X",
        "1",
        "0",
        "0",
        "2",
        "2",
        "1",
        "1",
        "1",
        "0",
        "0",
        "0",
        "1",
        "X",
      ]);
    });
  });
});
