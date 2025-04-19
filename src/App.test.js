import { render, screen } from "@testing-library/react";
import App from "./App";

test("Testing Component", () => {
  render(<App />);
  const el = screen.getByRole("heading");
  expect(el).toBeInTheDocument();
});

test("Testing for Mock API", async () => {
  render(<App />);
  const el = await screen.findAllByRole("listitem");
  expect(el).toHaveLength(3);
});
