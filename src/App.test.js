import { getRoles, render, screen } from "@testing-library/react";
import App from "./App";

test("getAllByRole", () => {
  render(<App />);
  const btns = screen.getAllByRole("button");
  const options = screen.getAllByRole("option");
  for (let i = 0; i < btns.length; i++) {
    expect(btns[i]).toBeInTheDocument();
  }
  for (let i = 0; i < options.length; i++) {
    expect(options[i]).toBeInTheDocument();
  }
});
