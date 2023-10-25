import { PropButton } from "@/interfaces/Button";

const PrimaryButton: React.FC<PropButton> = ({
  text,
  handleFunction,
  className,
  icon,
  disabled,
}) => {
  return (
    <button
      type="submit"
      className={`border flex items-center gap-4  ${className}`}
      onClick={handleFunction}
      disabled={disabled}
    >
      {icon} {text}
    </button>
  );
};

export default PrimaryButton;
