import React from "react";
import { render, cleanup } from "@testing-library/react";
import NotFound from "./index";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

describe("NotFound Component", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <Router>
        <NotFound />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
