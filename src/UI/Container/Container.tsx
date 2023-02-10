import React, { ReactElement } from "react";
import "./Container.scss";

export const Container: React.FC<{
  children: JSX.Element | JSX.Element[] | ReactElement | null;
}> = ({ children }) => {
  return <div className="main-wrapper">{children}</div>;
};
