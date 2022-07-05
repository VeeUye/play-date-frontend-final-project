import React from "react";
import { render, screen } from "@testing-library/react";
import Splash from "../../components/splash/Splash";

describe("Splash", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Splash />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays the title", () => {
    render(<Splash />);

    expect(screen.getByText(/Playdate/).textContent).toBe("Playdate");
  });

  it("displays the tagline", () => {
    render(<Splash />);

    expect(screen.getByText(/Scheduler/i).textContent).toBe(
      /scheduler for parents/i
    );
  });

  it("displays the splash image", () => {
    render(<Splash />);

    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("src", "/some-image-path.png");
    expect(image).toHaveAttribute("alt", "some alt text");
    expect(image).toBeVisible();
  });

  it("displays a sign in button", () => {
    render(<Splash />);

    const signInButton = screen.getByRole("button", { name: /submit/i });

    expect(signInButton).toHaveTextContent(/Submit/i);
  });

  it("displays a sign up button", () => {
    render(<Splash />);

    const signUpButton = screen.getByRole("button", { name: /sign in/i });

    expect(signUpButton).toHaveTextContent(/sign up/i);
  });
});
