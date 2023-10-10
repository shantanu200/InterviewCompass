import IErrorText from "@/interfaces/ErrorText";

const ErrorText: React.FC<IErrorText> = ({ error }) => {
  return <p className="text-sm text-red-600">{error}</p>;
};

export default ErrorText;
