import { render, screen } from "@testing-library/react";
import App from "./App";

test("test image with alt", () => {
  render(<App />);
  const img = screen.getByAltText("dummy snap");
  expect(img).toBeInTheDocument();
});

test("test image with mutliple alt", () => {
  render(<App />);
  const imgs = screen.getAllByAltText("dummy snap");
  for (let i in imgs) {
    expect(imgs[i]).toBeInTheDocument();
  }
});
