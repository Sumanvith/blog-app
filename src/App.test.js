import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("onChange Event Testing", async () => {
  userEvent.setup();
  render(<App />);
  const el = screen.getByRole("textbox");
  await userEvent.type(el, "hello");
  expect(screen.getByText("hello")).toBeInTheDocument();
});
