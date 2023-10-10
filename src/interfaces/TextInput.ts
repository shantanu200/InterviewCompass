import { HTMLInputTypeAttribute, HTMLProps } from "react";

export default interface ITextInput {
  type?: HTMLInputTypeAttribute;
  placeHolder: string;
  className?: HTMLProps<HTMLElement>["className"];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  handleBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  disabled?: boolean;
}
