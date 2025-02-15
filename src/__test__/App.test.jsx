import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("App Component Test", () => {
  it("demo", () => {
    render(<App />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
})