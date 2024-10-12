import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("toggle div test", () => {
  render(<App />);

  const toggleDiv = screen.getByTestId("toggleTest");
  expect(toggleDiv).not.toBe(undefined);
});

test("circle toggle div test", () => {
  render(<App />);

  const circleDiv = screen.getByTestId("circleTest");
  expect(circleDiv).not.toBe(undefined);
});
