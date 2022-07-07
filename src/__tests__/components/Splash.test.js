import React from "react";
import { render, screen } from "@testing-library/react";
import Splash from "../../components/splash/Splash";
import Image from "../../assets/images/swinging.svg";

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
      "Scheduler for parents"
    );
  });

  it("displays the splash image", () => {
    render(<Splash src={Image} />);

    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("src", "swinging.svg");
    expect(image).toHaveAttribute("alt", "girl on a swing");
    expect(image).toBeVisible();
  });

  it("displays a sign in button", () => {
    render(<Splash />);

    const signInButton = screen.getByRole("button", { name: /sign in/i });

    expect(signInButton).toHaveTextContent(/sign in/i);
  });

  it("displays a sign up button", () => {
    render(<Splash />);

    const signUpButton = screen.getByRole("button", { name: /sign up/i });

    expect(signUpButton).toHaveTextContent(/sign up/i);
  });
});
