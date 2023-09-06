import { getByTestId, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React from "react";
import Intro from "../src/components/Intro";

describe("Intro", () => {
  it("renders intro", () => {
    render(<Intro />);

    const content = getByTestId(document.body, "content");
    expect(content).toBeDefined();
  });

  it("renders intro", () => {
    render(<Intro />);

    const content = getByTestId(document.body, "content");
    expect(content).toContain(HTMLElement);
  });
});
