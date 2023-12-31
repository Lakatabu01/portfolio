import { getByText, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "../src/components/Footer";
import React from "react";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

describe("check if footer displays correctly", () => {
  it("renders author name", () => {
    render(<Footer />);

    const text = getByText(document.body, "© Olanrewaju 2023");
    expect(text).toBeTruthy(); //
  });
});
