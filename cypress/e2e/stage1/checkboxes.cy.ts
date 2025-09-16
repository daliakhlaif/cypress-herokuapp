import checkboxesPage from "../../support/pages/checkboxes-page";

describe("Herokuapp Checkboxes Tests", () => {
  beforeEach(() => {
    checkboxesPage.visit();
    checkboxesPage.isLoaded();
  });

  it("TC01: Should check the first checkbox", () => {
    checkboxesPage.check(0); // first checkbox
  });

  it("TC02: Should uncheck the second checkbox", () => {
    checkboxesPage.uncheck(1); // second checkbox
  });

  it("TC03: Should check both checkboxes", () => {
    checkboxesPage.checkAll();
  });

  it("TC04: Should uncheck both checkboxes", () => {
    checkboxesPage.uncheckAll();
  });
});
