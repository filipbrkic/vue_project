describe('Brands', () => {
  beforeEach(() => {
    cy.request("http://127.0.0.1:8080/brands");
    cy.request("POST", "http://127.0.0.1:8080/brands", {
      name: "cypress",
      description: "cypress"
    });
    cy.request("PUT", "http://127.0.0.1:8080/brands/152", {
      name: "cypress",
      description: "cypress"
    });
    // cy.request("DELETE", "http://127.0.0.1:8080/brands/102"); // works only once
  })
  it('successfully loads', () => {
    cy.visit('/brands');
  })
})
