import style from "./gameover.module.css";

export const GameOver = () => {
  return (
    <div>
      <div className={style.gameOver}>GAME OVER</div>
      <button
        className={style.gameOverBtn}
        onClick={() => {
          window.location.reload();
        }}
      >
        Try Again!
      </button>
    </div>
  );
};
