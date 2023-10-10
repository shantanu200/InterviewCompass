import React, { HTMLProps } from "react";
import { IconType } from "react-icons";

export interface PropButton {
  text: string;
  handleFunction(): any;
  className?: HTMLProps<HTMLElement>["className"];
  type?: string;
  icon?: React.ReactNode;
}
