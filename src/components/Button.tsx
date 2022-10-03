import style from "./button.module.css";

interface ButtonProps {
  handleSelectLevel: React.MouseEventHandler;
  label: string;
  level: string;
}

export const Button = ({ handleSelectLevel, label, level }: ButtonProps) => {
  const colour = `button${level}`;
  return (
    <button
      className={`${style.button} ${style[colour]}`}
      data-id={level}
      onClick={handleSelectLevel}
    >
      {label}
    </button>
  );
};
