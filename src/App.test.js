import { logRoles, prettyDOM, render, screen } from "@testing-library/react";
import App from "./App";

test("Testing Component", () => {
  render(<App />);
  const el = screen.getByText("Heading 2");
  expect(el).toBeInTheDocument();
  const { container } = render(<App />);
  console.log(prettyDOM(container));
  const { debug } = render(<App />);
  debug();
  logRoles(container);
});
