export const apiUrlBase = "https://api.jimsegal.com";
// export const apiUrlBase = "http://localhost:8001";

export const adminUrlBase = "https://admin.jimsegal.com";
// export const adminUrlBase = "http://localhost:1337";

export const projectInfo = [
  {
    absolute: true,
    link: "https://jimsegal.com",
    subtitle: "",
    title: "JimSegal.com",
  },
  {
    link: "/isJimWearingShorts",
    subtitle: "A site to predict if Jim is wearing shorts or not",
    title: "Is Jim Wearing Shorts?",
  },
  {
    link: "mountaingoat",
    subtitle: "Digital game",
    title: "Mountain Goat Game",
  },
  {
    link: "/recipes",
    subtitle: "A bunch of recipes that I frequent and wanted to show off",
    title: "Recipes",
  },
  {
    absolute: true,
    link: "https://jimsegal.com/IsChicagoColderThanAnchorage/",
    subtitle:
      "A way to quickly tell if Chicago, IL is colder than Anchorage, AK",
    title: "Is Chicago Colder Than Anchorage?",
  },
  {
    link: "/tabletop",
    subtitle: "My collection of table top games",
    title: "Tabletop Games",
  },
].sort(function (a, b) {
  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();
  if (titleA === "JIMSEGAL.COM" || titleB === "JIMSEGAL.COM") {
    return 1;
  }
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }

  return 0;
});
