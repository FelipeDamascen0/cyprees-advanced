class Login {
    visitarPagina() {
        cy.visit('https://www.saucedemo.com/');
    }

    preencherCredenciais(user: string, password: string) {
        cy.get("[data-test=username]").type(user);
        cy.get("[data-test=password]").type(password);
        cy.get("[data-test=login-button]").click();
    }

    verificaErroDeCredenciaisInvalidas() {
        cy.get('[data-test=error]').should(
            'contain.text',
            'Username and password do not match any user in this service'
        );
        cy.url().should('eq', 'https://www.saucedemo.com/');
    }
}

export default new Login();