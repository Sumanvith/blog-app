import { render, screen } from "@testing-library/react";
import App from "./App";

test("findBy", async () => {
  render(<App />);
  const el = await screen.findByText("Data Found", {}, { timeout: 4000 });
  expect(el).toBeInTheDocument();
});
