import React from 'react';
import Header from '../pages/Header.jsx';
import '../design/header.css';

import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const ButterflyGame = () => {
  return (
    <div>
        <Header title="Coming Soon ...🦋" />
    </div>
  )
}

export default ButterflyGame;
