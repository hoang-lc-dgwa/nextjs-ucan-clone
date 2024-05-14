import React, { FC } from "react";

interface ButtonProps {
  className?: string;
}

const Button: FC<ButtonProps> = ({ className }) => {
  return (
    <a
      href="https://job.mynavi.jp/25/pc/search/corp72921/outline.html"
      target="_blank"
      className={`c-btn ${className || ""}`}
    >
      <span>ENTRY</span>
    </a>
  );
};

export default Button;
