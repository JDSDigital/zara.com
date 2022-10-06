import { render, screen } from "@testing-library/react";

import { Home } from "./Home";

describe("Home", () => {
  it("renders", () => {
    render(<Home />);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
