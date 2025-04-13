import { render, screen } from "@testing-library/react";
import App from "./App";

test("getByText testing", () => {
  render(<App />);
  const btn = screen.getByText("Login");
  const ptag = screen.getByText("Paragraph");
  const htag = screen.getByText("Heading");
  expect(btn).toBeInTheDocument();
  expect(ptag).toBeInTheDocument();
  expect(htag).toBeInTheDocument();
});

test("getAllByText testing", () => {
  render(<App />);
  const htag = screen.getAllByText("Heading");
  for (let i = 0; i < htag.length; i++) {
    expect(htag[i]).toBeInTheDocument();
  }
});

test("para testing", () => {
  render(<App />);
  const ptag = screen.getByText("Paragraph");
  expect(ptag).toBeInTheDocument();
  expect(ptag).toHaveClass("paraStyle");
  expect(ptag).toHaveAttribute("id");
});
