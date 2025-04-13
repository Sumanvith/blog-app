import { render, screen } from "@testing-library/react";
import App from "./App";

test("testing with display value", () => {
  render(<App />);
  const input1 = screen.getByDisplayValue("hello1");
  const textarea = screen.getByDisplayValue("hello2");
  expect(input1).toBeInTheDocument();
  expect(textarea).toBeInTheDocument();
});

test("testing with same multiple display value", () => {
  render(<App />);
  const inputs = screen.getAllByDisplayValue("hello1");
  for (let i in inputs) {
    expect(inputs[i]).toBeInTheDocument();
  }
});
