import React, { CSSProperties, MouseEventHandler } from "react";
interface IButton {
  children?: React.ReactNode;
  style?: CSSProperties;
  onClick?: MouseEventHandler;
  className?: string | undefined;
}

const Button = ({
  children,
  style,
  onClick = () => {},
  className,
}: IButton) => {
  return (
    <button style={style} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
