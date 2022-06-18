import { render, screen } from "@testing-library/react";
import Fridge from "./Fridge";

test("renders learn react link", () => {
  render(<Fridge />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
