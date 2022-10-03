# Minesweeper 💣

Before we take a break from grid-based challenges, your dastardly dare for this week is to recreate the logic behind the classic [Minesweeper](https://minesweeper.online/) game. Given a grid of characters where each `X` represents a mine and each `-` represents empty space, the aim is to return a grid where each `-` is replaced by an integer indicating the number of mines adjacent to that spot (including diagonally).

Rewards:
5️⃣ Points are awarded for a working solution.
3️⃣ Further points are awarded for creating a playable game (i.e. a working GUI).
2️⃣ Further points are awarded for creating more than one difficulty level in your playable game.

## Example:

```
minesweeper([
    "-", "-", "-", "-", "-",
    "-", "-", "-", "-", "-",
    "X", "X", "-", "-", "-",
    "-", "-", "-", "-", "-",
    "-", "-", "-", "-", "X",
])
```

would return:

```
[
    "0", "0", "0", "0", "0",
    "2", "2", "1", "0", "0",
    "X", "X", "1", "0", "0",
    "2", "2", "1", "1", "1",
    "0", "0", "0", "1", "X",
]
```

### TODO

- How do you win? Check if only mines remain unselected?
- Game over screen
- Timer?
