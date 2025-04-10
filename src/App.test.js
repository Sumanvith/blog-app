import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  console.log(1234);
});
beforeEach(() => {
  console.log(1234);
});

afterAll(() => {
  console.log(1234);
});
afterEach(() => {
  console.log(1234);
});

test("onChange event testing 1", () => {
  render(<App />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("updated data")).toBeInTheDocument();
});

test("onChange event testing 2", () => {
  render(<App />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("updated data")).toBeInTheDocument();
});
