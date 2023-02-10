import classNames from "classnames";
import React, { FC, HTMLProps } from "react";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children?: JSX.Element | JSX.Element[] | string;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={classNames([
        "rounded bg-primary py-3 px-10 uppercase text-white shadow transition hover:bg-primary-600 active:scale-[.95]",
        className,
      ])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
