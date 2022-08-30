describe('Models', () => {
  beforeEach(() => {
    cy.request("http://127.0.0.1:8080/models");
    cy.request("POST", "http://127.0.0.1:8080/models", {
      name: "cypress",
      description: "cypress"
    });
    cy.request("PUT", "http://127.0.0.1:8080/models/48", {
      name: "cypress",
      description: "cypress"
    });
    // cy.request("DELETE", "http://127.0.0.1:8080/models/102"); // works only once
  })
  it('successfully loads', () => {
    cy.visit('/models');
  })
})