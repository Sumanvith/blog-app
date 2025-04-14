import { render, screen } from "@testing-library/react";
import App from "./App";

test("positive", () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue("hello");
  expect(input).toBeEnabled();
  expect(input).toHaveAttribute("id");
  expect(input).toHaveClass("test-style");
});

test("negative", () => {
  render(<App />);
  const btn = screen.queryByRole("button");
  expect(btn).not.toBeInTheDocument();
});
