import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";

test("Renders dashboard title", () => {
  render(<Dashboard />);
  const h1Element = screen.getByText(/Select a Fridge/i);
  expect(h1Element).toBeInTheDocument();
});

// TODO: More functional tests
