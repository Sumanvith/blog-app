import { render, screen } from "@testing-library/react";
import App from "./App";

test("get by role", () => {
  render(<App />);
  const btn1 = screen.getByRole("button", { name: "Click 1" });
  const btn2 = screen.getByRole("button", { name: "Click 2" });
  const input1 = screen.getByRole("textbox", { name: "Username" });
  const input2 = screen.getByRole("textbox", { name: "User age" });
  const dv1 = screen.getByRole("dummy");
  expect(btn1).toBeInTheDocument();
  expect(btn2).toBeInTheDocument();
  expect(input1).toBeInTheDocument();
  expect(input2).toBeInTheDocument();
  expect(dv1).toBeInTheDocument();
});
