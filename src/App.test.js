import { render, screen } from "@testing-library/react";
import App from "./App";

test("queryBy", () => {
  render(<App />);
  const div1 = screen.queryByText("Login");
  const div2 = screen.queryByText("Logout");
  expect(div1).toBeInTheDocument();
  expect(div2).not.toBeInTheDocument();
});
