import React from "react";
import "../design/header.css";

import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const Header = ({ title, subtitle, className = "" }) => {
  return (
    <header className={`page-header ${className}`}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
};

export default Header;