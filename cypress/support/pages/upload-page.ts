const LOCATORS = {
  fileInput: "#file-upload",
  uploadButton: "#file-submit",
  uploadedFiles: "#uploaded-files",
};

class UploadPage {
  visit() {
    cy.visit("/upload");
  }

  isLoaded() {
    cy.get(LOCATORS.fileInput).should("be.visible");
    cy.get(LOCATORS.uploadButton).should("be.visible");
  }

  attachFile(filePath: string) {
    cy.get(LOCATORS.fileInput).attachFile(filePath);
  }

  clickUpload() {
    cy.get(LOCATORS.uploadButton).click();
  }

  assertUploadedFile(fileName: string) {
    cy.get(LOCATORS.uploadedFiles).should("contain.text", fileName);
  }
}

export default new UploadPage();
