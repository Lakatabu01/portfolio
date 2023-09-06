import {  getByText, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React from "react";
import MyProjects from "../src/components/Projects";

describe("Test project component", () => {
  it("renders project heading", () => {
    render(<MyProjects />);
    const text = getByText(document.body, "My Projects");

    expect(text.textContent).toStrictEqual("My Projects");
  });

  it("The component renders the correct number of projects", () => {
    const { getByTestId } = render(<MyProjects />);

    const numberOfProjects =
      getByTestId("projects").querySelectorAll("section").length;

    expect(numberOfProjects).toBe(6);
  });
});
