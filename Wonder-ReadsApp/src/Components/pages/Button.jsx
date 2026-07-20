import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const Button = ({
  children,
  onClick,
  background,
  type = "button",
  className = "button",
  disabled = false
}) => {
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      style={{
        background: background
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;