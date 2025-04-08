import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test First react app case", () => {
  render(<App />);
  const text = screen.getByText(/First React Test Case/i);
  const title = screen.getByTitle(/photo/i);
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

test("Testing input box", () => {
  render(<App />);
  const checkInput = screen.getByRole("textbox");
  const checkInputPlaceHolder = screen.getByPlaceholderText("Enter User Name");
  expect(checkInput).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "username");
  expect(checkInput).toHaveAttribute("id", "userId");
  expect(checkInputPlaceHolder).toBeInTheDocument();
});
