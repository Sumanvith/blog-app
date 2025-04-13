import { render, screen } from "@testing-library/react";
import App from "./App";

test("ByPlaceholderText", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("enter username");
  expect(input).toBeInTheDocument();
});

test("AllByPlaceholderText", () => {
  render(<App />);
  const input = screen.getAllByPlaceholderText("enter username");
  for (let i = 0; i < input.length; i++) {
    expect(input[i]).toBeInTheDocument();
  }
});
