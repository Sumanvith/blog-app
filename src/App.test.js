import { render } from "@testing-library/react";
import App from "./App";

test("custom query", () => {
  render(<App />);
  const el = document.querySelector("#testId");
  expect(el).toBeInTheDocument();
});
