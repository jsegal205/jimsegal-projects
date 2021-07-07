import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  render,
  cleanup,
  getByTestId,
  queryByTestId,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { toMatchDiffSnapshot } from "snapshot-diff";

expect.extend({ toMatchDiffSnapshot });
import RandomPlaceholder from "./index";

jest.mock("./sites", () => {
  return {
    key: {
      apiLink: "http://apiLink/",
      delimiter: "x",
    },
  };
});

afterEach(cleanup);

describe("Random Placeholder Component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Router>
        <RandomPlaceholder />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });

  describe("input logic", () => {
    it("defaults inputs to empty", () => {
      const { container } = render(
        <Router>
          <RandomPlaceholder />
        </Router>
      );

      const heightInput = getByTestId(container, "placeholder-height");
      const widthInput = getByTestId(container, "placeholder-width");

      expect(heightInput.value).toBe("");
      expect(widthInput.value).toBe("");
      expect(
        queryByTestId(container, "placeholder-image")
      ).not.toBeInTheDocument();
      expect(
        queryByTestId(container, "placeholder-error")
      ).not.toBeInTheDocument();
    });

    describe("when inputs are blank", () => {
      it("shows error messaging", () => {
        const { container, asFragment } = render(
          <Router>
            <RandomPlaceholder />
          </Router>
        );

        const initialRender = asFragment();
        const btn = getByTestId(container, "placeholder-submit");
        fireEvent.click(btn);

        expect(initialRender).toMatchDiffSnapshot(asFragment());
      });
    });

    describe("when inputs are filled", () => {
      it("shows image", () => {
        const { container, asFragment } = render(
          <Router>
            <RandomPlaceholder />
          </Router>
        );

        const initialRender = asFragment();
        const heightInput = getByTestId(container, "placeholder-height");
        const widthInput = getByTestId(container, "placeholder-width");

        fireEvent.change(heightInput, { target: { value: "1" } });
        fireEvent.change(widthInput, { target: { value: "1" } });

        const btn = getByTestId(container, "placeholder-submit");
        fireEvent.click(btn);

        expect(initialRender).toMatchDiffSnapshot(asFragment());
      });
    });
  });
});
