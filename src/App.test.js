import { render, screen } from "@testing-library/react";
import App from "./App";

test("getByLabelText 1", () => {
  render(<App />);
  const input = screen.getByLabelText("Username");
  expect(input).toBeInTheDocument();
});

test("getByLabelText 2", () => {
  render(<App />);
  const checkbox = screen.getByLabelText("Skills");
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).toBeChecked();
});
