import { render, screen } from "@testing-library/react";
import App from "./App";

test("getAllByLabelText input", () => {
  render(<App />);
  const inputs = screen.getAllByLabelText("Username");
  for (let i = 0; i < inputs.length; i++) {
    expect(inputs[i]).toBeInTheDocument();
    expect(inputs[i]).toHaveValue("hello");
  }
});

test("getAllByLabelText checkbox", () => {
  render(<App />);
  const checkboxes = screen.getAllByLabelText("Skills");
  for (let i = 0; i < checkboxes.length; i++) {
    expect(checkboxes[i]).toBeInTheDocument();
    expect(checkboxes[i]).toBeChecked();
  }
});
