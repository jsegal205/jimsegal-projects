import React from "react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { render } from "@testing-library/react";

import useFetch from "../../utils/useFetch";
import { useJsApiLoader } from "@react-google-maps/api";
import { apiUrlBase } from "../../utils";

import Travel from "./index";

jest.mock("../../utils/useFetch", () => jest.fn());
jest.mock("@react-google-maps/api", () => ({
  GoogleMap: () => {
    const React = require("react");
    class MockGoogleMap extends React.Component {
      render() {
        return <>mockGoogleMap</>;
      }
    }

    return <MockGoogleMap />;
  },

  useJsApiLoader: jest.fn(() => ({
    isLoaded: true,
  })),
}));

describe("Travel Component", () => {
  const baseUrl = `${apiUrlBase}/travel`;

  describe("when `useFetch` is awaiting promise to resolve", () => {
    it("displays `Loading...`", () => {
      useFetch.mockReturnValue({
        loading: true,
        data: [],
      });

      const { container } = render(
        <Router>
          <Travel />
        </Router>
      );
      expect(useFetch).toHaveBeenCalledWith(baseUrl);
      expect(container).toMatchSnapshot();
    });
  });

  describe("when `useFetch` returns data", () => {
    it("displays data", () => {
      useFetch.mockReturnValue({
        loading: false,
        data: [
          {
            city: "Austin",
            state: "TX",
            country: "USA",
            lat: 30.267153,
            lng: -97.743061,
            visits: ["February 2018", "April 2014"],
          },
        ],
      });

      useJsApiLoader.mockReturnValue({
        isLoaded: true,
      });

      const { container } = render(
        <Router>
          <Travel />
        </Router>
      );
      expect(useFetch).toHaveBeenCalledWith(baseUrl);
      expect(container).toMatchSnapshot();
    });

    describe("when 500 status returned", () => {
      it("displays error messaging", () => {
        useFetch.mockReturnValue({
          loading: false,
          data: {
            error: "server likely on fire",
            status: 500,
          },
        });

        const { container } = render(
          <Router>
            <Travel />
          </Router>
        );
        expect(useFetch).toHaveBeenCalledWith(baseUrl);
        expect(container).toMatchSnapshot();
      });
    });
  });
});
