import { render, screen, within } from "@testing-library/react";
import App from "./App";

test("Test within function", () => {
  render(<App />);
  const el = screen.getByText("Hello World");
  const subEl = within(el).getByText("Hey");
  expect(el).toBeInTheDocument();
  expect(subEl).toBeInTheDocument();
});
