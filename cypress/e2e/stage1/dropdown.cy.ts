import dropdownPage from "../../support/pages/dropdown-page";

describe("Herokuapp Dropdown Tests", () => {
  beforeEach(() => {
    dropdownPage.visit();
    dropdownPage.isLoaded();
    cy.fixture("dropdown").as("dropdownOptions");
  });

  it("TC01: Should have the default option selected on page load", () => {
    cy.get("@dropdownOptions").then((options: any) => {
      dropdownPage.assertDefaultOption(options.default);
    });
  });

  it("TC02: Should select the first option", () => {
    cy.get("@dropdownOptions").then((options: any) => {
      dropdownPage.selectOption(options.option1);
      dropdownPage.assertSelectedOption(options.option1);
    });
  });

  it("TC03: Should select the second option", () => {
    cy.get("@dropdownOptions").then((options: any) => {
      dropdownPage.selectOption(options.option2);
      dropdownPage.assertSelectedOption(options.option2);
    });
  });
});
