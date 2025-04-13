import { render, screen } from "@testing-library/react";
import App from "./App";

test("button testing with title", () => {
  render(<App />);
  const btn = screen.getByTitle("click me");
  expect(btn).toBeInTheDocument();
});

test("testing with same multiple title", () => {
  render(<App />);
  const spans = screen.getAllByTitle("span tag");
  for (let i in spans) {
    expect(spans[i]).toBeInTheDocument();
  }
});
