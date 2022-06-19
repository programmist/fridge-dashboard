import { render, screen } from "@testing-library/react";
import Fridge from "./Fridge";

/*
 * Setup mocks
 */
global.window = Object.create(window);
jest.mock("react-chartjs-2", () => ({
  Bar: () => null,
  Line: () => null,
}));

test("renders Fridge title", () => {
  Object.defineProperty(window, "location", {
    value: {
      pathname: "/fridge/2",
    },
  });

  render(<Fridge />);
  const h1Element = screen.getByText(/Fridge 2/i);
  expect(h1Element).toBeInTheDocument();
});

// TODO: More functional tests
