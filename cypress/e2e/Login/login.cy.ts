import login from "../../pages/login";
import invetory from "../../pages/inventory";

describe('Login', () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it('Relizar login com credenciais validas', () => {
    login.preencherCredenciais(Cypress.env('username'), "secret_sauce")
    invetory.verificarUrl();
  });

  it('Realizar Login com credenciais invalidas', () => {
    login.preencherCredenciais("standard_user", "123");
    login.verificaErroDeCredenciaisInvalidas();
  });
})