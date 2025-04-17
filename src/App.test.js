import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("Functional Props Testing and Mocking", async () => {
  const testFunction = jest.fn();
  userEvent.setup();
  render(<App testFunction={testFunction} />);
  const btn = screen.getByRole("button");
  await userEvent.click(btn);
  expect(testFunction).toBeCalled();
});
