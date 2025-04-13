import { render, screen } from "@testing-library/react";
import App from "./App";

test("testing with test id", () => {
  render(<App />);
  const divId = screen.getByTestId("div-test-id");
  expect(divId).toBeInTheDocument();
});

test("testing with same and mutliple test id", () => {
  render(<App />);
  const divIds = screen.getAllByTestId("div-test-id");
  for (let i in divIds) {
    expect(divIds[i]).toBeInTheDocument();
  }
});
