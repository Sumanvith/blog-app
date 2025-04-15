import { act, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("Act Function", async () => {
  userEvent.setup();
  render(<App />);
  const el = screen.getByRole("textbox");
  await act(async () => {
    await userEvent.type(el, "hello");
  });
  expect(screen.getByText("hello")).toBeInTheDocument();
});
