import { render, screen } from "@testing-library/react";
import App from "./App";

test("get by role", () => {
  render(<App />);
  const inputField = screen.getByRole("textbox");
  const btn = screen.getByRole("button");
  expect(inputField).toBeInTheDocument();
  expect(inputField).toHaveValue("hello");
  expect(inputField).toBeDisabled();
  expect(btn).toBeInTheDocument();
});
