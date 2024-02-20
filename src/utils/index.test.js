import { apiUrlBase, adminUrlBase, projectInfo } from "./index";

describe("UTILS - apiUrlBase", () => {
  it("returns prod string", () => {
    expect(apiUrlBase).toEqual("https://api.jimsegal.com");
  });
});

describe("UTILS - adminUrlBase", () => {
  it("returns prod string", () => {
    expect(adminUrlBase).toEqual("https://admin.jimsegal.com");
  });
});

describe("UTILS - projectInfo", () => {
  it("returns array of project info", () => {
    expect(projectInfo.length).toEqual(11);
    expect(projectInfo.map((project) => project.title)).toEqual([
      "JimSegal.com",
      "Congress",
      "Dogecoin Price Tracker",
      "Is Chicago Colder Than Anchorage?",
      "Is Jim Wearing Shorts?",
      "Mountain Goat Game",
      "Random Placeholder",
      "Reading List",
      "Recipes",
      "Tabletop Games",
      "Travels",
    ]);
  });
});
