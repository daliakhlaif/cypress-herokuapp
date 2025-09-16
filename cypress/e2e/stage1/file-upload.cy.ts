import uploadPage from "../../support/pages/upload-page";

describe("Herokuapp File Upload Tests", () => {
  beforeEach(() => {
    uploadPage.visit();
    uploadPage.isLoaded();
    cy.fixture("files").as("files");
    cy.fixture("messages").as("messages");
  });

  it("TC01: Should upload a single file", () => {
    cy.get("@files").then((files: any) => {
      uploadPage.attachFile(files.file1);
      uploadPage.clickUpload();
      uploadPage.assertUploadedFile(files.file1);
    });
  });

  it("TC02: Should upload another file", () => {
    cy.get("@files").then((files: any) => {
      uploadPage.attachFile(files.file2);
      uploadPage.clickUpload();
      uploadPage.assertUploadedFile(files.file2);
    });
  });

  it("TC03: Should fail to upload without selecting a file", () => {
    uploadPage.clickUpload();
    cy.get("@messages").then((messages: any) => {
        cy.contains(messages.errorPage).should('be.visible')
    });
  });
});
