import style from "./winner.module.css";

export const Winner = () => {
  return (
    <div className={style.winContainer}>
      <div className={style.headers}>
        <div className={style.heading}>CONGRATULATIONS!</div>
        <div className={style.subHeading}>You beat the board.</div>
      </div>
      <button
        className={style.winBtn}
        onClick={() => {
          window.location.reload();
        }}
      >
        Play Again
      </button>
    </div>
  );
};
