Cypress.Commands.add('login', () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("[data-test=username]").type(Cypress.env('username'));
    cy.get("[data-test=password]").type(Cypress.env('password'));
    cy.get("[data-test=login-button]").click();
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html")
});