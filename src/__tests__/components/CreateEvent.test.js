import React from "react";
import { render, screen } from "@testing-library/react";
import CreateEvent from "../../components/create-event/CreateEvent";

describe("CreateEvent", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<CreateEvent />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays the correct title", () => {
    render(<CreateEvent />);
    const title = screen.getByText(/Create Event/i);

    expect(title).toBeVisible();
  });
});

describe("Create Event Form", () => {
  xit("displays the Event Name field ", () => {
    render(<CreateEvent />);

    expect(screen.getByLabelText("Event Name")).toBeVisible();

    expect(screen.getByLabelText("Date")).toBeVisible();

    expect(screen.getByLabelText("Time")).toBeVisible();

    expect(screen.getByLabelText("Location")).toBeVisible();

    expect(screen.getByLabelText("Invite")).toBeVisible();
  });
});

describe("Create Event Button", () => {
  it("displays a sign in button", () => {
    render(<CreateEvent />);

    const signInButton = screen.getByRole("button", { name: /create event/i });

    expect(signInButton).toHaveTextContent(/create event/i);
  });
});
