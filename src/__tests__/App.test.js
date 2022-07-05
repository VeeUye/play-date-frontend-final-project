import { render, screen } from "@testing-library/react";
import App from "../components/App";

// TODO rewrite test

xit("renders learn react link", () => {
  render(<App />);
  const textElement = screen.getByText(/Playdate/i);
  expect(textElement).toBeInTheDocument();
});
