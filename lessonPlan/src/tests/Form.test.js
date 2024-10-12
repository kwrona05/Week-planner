import React from "react";
import { render, screen } from "@testing-library/react";
import Form from "../components/Form";

test("test buttons", () => {
  render(<Form />);

  const addButton = screen.getByTestId("addBtn");

  expect(addButton).not.toBe(undefined);
});

test("test form div", () => {
  render(<Form />);

  const formDiv = screen.getByTestId("formDiv");
  expect(formDiv).not.toBe(undefined);
});

test("test ul", () => {
  render(<Form />);

  const ul = screen.getByTestId("ulTest");
  expect(ul).not.toBe(undefined);
});
