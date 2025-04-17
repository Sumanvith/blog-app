import { render, screen } from "@testing-library/react";
import User from "./User";

test("Props Testing", () => {
  render(<User name="Hello" />);
  const user = screen.getByText("Hello");
  expect(user).toBeInTheDocument();
});
