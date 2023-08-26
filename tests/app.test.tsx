import { getByTestId, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React from "react";
import App from "../src/App";
describe("Intro", () => {
  it("renders the entire components", () => {
    render(<App />);

    const content = getByTestId(document.body, "entire-elements");
    expect(content).toContain(HTMLElement);
  });
});
