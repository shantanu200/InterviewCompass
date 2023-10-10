import ITextArea from "@/interfaces/TextArea";

const TextArea: React.FC<ITextArea> = ({
  className,
  rows,
  cols,
  placeHolder,
  handleChange,
  handleBlur,
}) => {
  return (
    <textarea
      className={`border p-4 rounded-lg ${className}`}
      rows={rows}
      cols={cols}
      placeholder={placeHolder}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default TextArea;
