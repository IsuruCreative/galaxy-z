// RoverCard.test.js
import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import RoverCard from "../src/components/common/cards/RoverCard";
import NotifyCard from "../src/components/common/cards/NotifyCard";
import Error from "../src/components/common/Error";
import Footer from "../src/components/common/Footer";
import { BrowserRouter as Router } from "react-router-dom";

test("renders rover card with photo details", () => {
  const photo = {
    img_src: "test_image.jpg",
    rover: { name: "Curiosity" },
    camera: { name: "FHAZ" },
    earth_date: "2024-05-02",
  };

  render(<RoverCard photo={photo} />);

  const roverNameElement = screen.getByText(/Rover Curiosity/i);
  expect(roverNameElement).toBeInTheDocument();

  const cameraNameElement = screen.getByText(/Camera FHAZ/i);
  expect(cameraNameElement).toBeInTheDocument();

  const dateElement = screen.getByText(/Taken In 2024-05-02/i);
  expect(dateElement).toBeInTheDocument();
});

test("renders notify card with notification details", () => {
  const notification = {
    messageIssueTime: "2024-05-02T12:00:00Z",
    messageType: "Alert",
    messageBody:
      "## Summary: This is a test notification. ## Notes: Please ignore.",
  };

  render(
    <Router>
      <NotifyCard notification={notification} />
    </Router>
  );

  const messageTypeElement = screen.getByText(/Type Alert/i);
  expect(messageTypeElement).toBeInTheDocument();

  const messageDateElement = screen.getByText(/Date/i);
  expect(messageDateElement).toBeInTheDocument();

  const messageBodyElement = screen.getByText(/This is a test notification./i);
  expect(messageBodyElement).toBeInTheDocument();
});

test("renders error message", () => {
  const errorMessage = "This is a test error message.";

  render(<Error error={errorMessage} />);

  const errorElement = screen.getByText(`Error: ${errorMessage}`);
  expect(errorElement).toBeInTheDocument();
});


test("renders footer text", () => {
  render(<Footer />);

  const footerTextElement = screen.getByText(/Created for SLIIT Application Framework Module 🚀👨‍🚀🚀/i);
  expect(footerTextElement).toBeInTheDocument();
});