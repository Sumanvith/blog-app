import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("onChange event testing", () => {
  render(<App />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("updated data")).toBeInTheDocument();
});
