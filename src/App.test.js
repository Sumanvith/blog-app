import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("Click event with userEvent", async () => {
  userEvent.setup();
  render(<App />);
  const btn = screen.getByText("Click Me");
  await userEvent.click(btn);
  expect(screen.getByText("hello")).toBeInTheDocument();
});
