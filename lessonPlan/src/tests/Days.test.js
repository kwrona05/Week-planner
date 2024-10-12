import React from "react";
import { render, screen } from "@testing-library/react";
import Days from "../components/Days";

test("title test", () => {
  render(<Days />);

  const title = screen.getByTestId("titleText");
  expect(title).not.toBe(undefined);
});
