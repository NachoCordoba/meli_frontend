import React, { CSSProperties } from "react";
import "./index.css";

interface ICard {
  children?: React.ReactNode;
  contentStyle?: CSSProperties;
}

const Card = ({ children, contentStyle }: ICard) => {
  return (
    <div className="card-container">
      <div style={contentStyle} className="card-content">
        {children}
      </div>
    </div>
  );
};

export default Card;
