describe('Owners', () => {
  beforeEach(() => {
    cy.request("http://127.0.0.1:8080/owners");
    cy.request("POST", "http://127.0.0.1:8080/owners", {
      first_name: "cypress",
      last_name: "cypress"
    });
    cy.request("PUT", "http://127.0.0.1:8080/owners/9", {
      first_name: "cypress",
      last_name: "cypress"
    });
    // cy.request("DELETE", "http://127.0.0.1:8080/owners/36"); // works only once
  })
  it('successfully loads', () => {
    cy.visit('/owners');
  })
})