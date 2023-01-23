import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
    render(<App />);
    const result = screen.getByText(/Pokemon/i);
    expect(result).toBeInTheDocument();
});
