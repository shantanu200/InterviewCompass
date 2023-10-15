import { PropButton } from "@/interfaces/Button";

const PrimaryButton: React.FC<PropButton> = ({
  text,
  handleFunction,
  className,
  type,
  icon,
  disabled,
}) => {
  return (
    <button
      type={type || "button"}
      className={`p-4 border  ${className}`}
      onClick={handleFunction}
      disabled={disabled}
    >
      {icon} {text}
    </button>
  );
};

export default PrimaryButton;
