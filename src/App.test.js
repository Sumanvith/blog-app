import { configure, render, screen } from "@testing-library/react";
import App from "./App";

configure({ testIdAttribute: "element-id" });

test("test div with data test id Predefined", () => {
  render(<App />);
  const divElement = screen.getByTestId("test-id");
  expect(divElement).toBeInTheDocument();
});

test("test div with data test id Userdefined", () => {
  render(<App />);
  const divElement = screen.getByTestId("test-id");
  expect(divElement).toBeInTheDocument();
});
