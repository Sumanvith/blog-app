import { render, screen } from "@testing-library/react";
import App from "./App";

test("text match with string", () => {
  render(<App />);
  const div1 = screen.getByText("Hello World");
  const div2 = screen.getByText("hello world", { exact: false });
  const div3 = screen.getByText("hello", { exact: false });
  expect(div1).toBeInTheDocument();
  expect(div2).toBeInTheDocument();
  expect(div3).toBeInTheDocument();
});

test("text match with regex", () => {
  render(<App />);
  const div1 = screen.getByText(/lo Wo/);
  const div2 = screen.getByText(/hello/i);
  const div3 = screen.getByText(/hello w?orld/i);
  expect(div1).toBeInTheDocument();
  expect(div2).toBeInTheDocument();
  expect(div3).toBeInTheDocument();
});
