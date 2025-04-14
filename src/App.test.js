import { render, screen } from "@testing-library/react";
import App from "./App";

test("text match with function", () => {
  render(<App />);
  const div1 = screen.getByText((content, element) =>
    content.startsWith("Hello")
  );
  const div2 = screen.getByText((content, element) =>
    content.endsWith("World")
  );
  const div3 = screen.getByText((content, element) =>
    content.includes("lo Wo")
  );
  const div4 = screen.getByText((content, element) => {
    return content.length === 11;
  });
  expect(div1).toBeInTheDocument();
  expect(div2).toBeInTheDocument();
  expect(div3).toBeInTheDocument();
  expect(div4).toBeInTheDocument();
});
