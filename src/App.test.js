import { render } from "@testing-library/react";
import App from "./App";

test("snapshot for app component", () => {
  const container = render(<App />);
  expect(container).toMatchSnapshot();
});
