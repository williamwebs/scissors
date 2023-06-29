import { render, screen } from "@testing-library/react";
import { Login } from "../components/Index";

test("username should be rendered", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
});
