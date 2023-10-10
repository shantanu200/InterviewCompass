import ITextInput from "@/interfaces/TextInput";

const TextInput: React.FC<ITextInput> = ({
  type,
  placeHolder,
  className,
  handleChange,
  disabled,
  value,
  handleBlur,
  name,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onBlur={handleBlur}
      className={`p-4 border rounded-lg w-full border-[#B2D8FF] focus:outline-none ${className}`}
      placeholder={placeHolder}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};

export default TextInput;
