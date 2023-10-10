import { PropButton } from "@/interfaces/Button";

const PrimaryButton: React.FC<PropButton> = ({
  text,
  handleFunction,
  className,
  type,
  icon,
}) => {
  return (
    <button
      type={type || "button"}
      className={`p-4 border bg-[#28A745] text-white ${className}`}
      onClick={handleFunction}
    >
      {icon} {text}
    </button>
  );
};

export default PrimaryButton;
