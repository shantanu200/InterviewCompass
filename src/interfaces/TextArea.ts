import { HTMLProps } from "react";

export default interface ITextArea {
  value: string;
  className?: HTMLProps<HTMLElement>["className"];
  rows?: number;
  cols?: number;
  placeHolder: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleBlur?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
}
