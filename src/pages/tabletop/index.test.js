import React from "react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

import useFetch from "../../utils/useFetch";
import Tabletop from "./index";
import { apiUrlBase } from "../../utils";
import {
  render,
  fireEvent,
  getByTestId,
  waitFor,
} from "@testing-library/react";
import { toMatchDiffSnapshot } from "snapshot-diff";

expect.extend({ toMatchDiffSnapshot });

jest.mock("../../utils/useFetch", () => jest.fn());

describe("Tabletop Component", () => {
  const baseUrl = `${apiUrlBase}/games`;

  describe("when `useFetch` is awaiting promise to resolve", () => {
    it("displays `Loading...`", () => {
      useFetch.mockReturnValue({
        loading: true,
        data: [],
      });

      const { container } = render(
        <Router>
          <Tabletop />
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
            title: "title",
            link: "link",
            image: "image",
          },
          {
            title: "title2",
            link: "link2",
            image: "image2",
          },
        ],
      });

      const { container } = render(
        <Router>
          <Tabletop />
        </Router>
      );
      expect(useFetch).toHaveBeenCalledWith(baseUrl);
      expect(container).toMatchSnapshot();
    });

    describe("when no data returned", () => {
      it("displays no data", () => {
        useFetch.mockReturnValue({
          loading: false,
          data: [],
        });

        const { container } = render(
          <Router>
            <Tabletop />
          </Router>
        );
        expect(useFetch).toHaveBeenCalledWith(baseUrl);
        expect(container).toMatchSnapshot();
      });
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
            <Tabletop />
          </Router>
        );
        expect(useFetch).toHaveBeenCalledWith(baseUrl);
        expect(container).toMatchSnapshot();
      });
    });
  });

  describe("Search filtering", () => {
    const apiData = [
      {
        title: "abcTitle",
        link: "abcLink",
        image: "abcImage",
      },
      {
        title: "xyzTitle",
        link: "xyzLink",
        image: "xyzImage",
      },
    ];
    const setup = () => {
      useFetch.mockReturnValue({
        loading: false,
        data: apiData,
      });

      return render(
        <Router>
          <Tabletop />
        </Router>
      );
    };

    it("defaults search input to empty string", () => {
      const { container, getByText } = setup();
      const tabletopFilter = getByTestId(container, "search-filter");
      const tabletopCardsContainer = getByTestId(container, "tabletop-cards");
      const tabletopCards = tabletopCardsContainer.querySelectorAll("article");

      expect(tabletopFilter.value).toBe("");
      expect(tabletopCards.length).toEqual(apiData.length);
      expect(getByText("abcTitle")).toBeInTheDocument();
      expect(getByText("xyzTitle")).toBeInTheDocument();
    });

    describe("when input matches subset of the data", () => {
      it("only shows data to match", () => {
        const { container, asFragment } = setup();

        const initialRender = asFragment();
        const tabletopFilter = getByTestId(container, "search-filter");
        fireEvent.change(tabletopFilter, { target: { value: "a" } });

        expect(initialRender).toMatchDiffSnapshot(asFragment());
      });
    });

    describe("when input matches none of the data", () => {
      it("only shows data to match", () => {
        const { container, asFragment } = setup();

        const initialRender = asFragment();
        const tabletopFilter = getByTestId(container, "search-filter");
        fireEvent.change(tabletopFilter, { target: { value: "mno" } });

        expect(initialRender).toMatchDiffSnapshot(asFragment());
      });
    });

    describe("when reset clicked", () => {
      it("resets search input value", () => {
        const { container } = setup();

        const tabletopFilter = getByTestId(container, "search-filter");
        fireEvent.change(tabletopFilter, { target: { value: "a" } });

        expect(tabletopFilter.value).toBe("a");

        const tabletopFilterReset = getByTestId(
          container,
          "search-filter-reset"
        );

        fireEvent.click(tabletopFilterReset);
        expect(tabletopFilter.value).toBe("");
      });
    });
  });

  describe("Random button", () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.5;
    global.Math = mockMath;

    const setup = () => {
      useFetch.mockReturnValue({
        loading: false,
        data: [
          {
            title: "abcTitle",
            link: "abcLink",
            image: "abcImage",
          },
          {
            title: "xyzTitle",
            link: "xyzLink",
            image: "xyzImage",
          },
        ],
      });

      return render(
        <Router>
          <Tabletop />
        </Router>
      );
    };
    it("selects a single and displays a single game", async () => {
      const { container, getByText } = setup();

      expect(getByText("Number of Games: 2")).toBeInTheDocument();

      fireEvent.click(getByTestId(container, "random-game"));
      await waitFor(() => {
        expect(getByTestId(container, "search-filter").value).toBe("abcTitle");
      });

      const tabletopCardsContainer = getByTestId(container, "tabletop-cards");
      const tabletopCards = tabletopCardsContainer.querySelectorAll("article");

      expect(tabletopCards.length).toEqual(1);

      expect(getByText("Number of Games: 1")).toBeInTheDocument();
    });
  });
});
