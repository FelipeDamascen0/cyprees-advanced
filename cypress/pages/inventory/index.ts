class Invetory{
    verificarUrl(){
        cy.url().should("eq", "https://www.saucedemo.com/inventory.html")
    }

    adicionaItemAoCarrinho(nameItem: string){
        cy.get(`[data-test=add-to-cart-${nameItem}]`).click();
    }

    varificaQuantidadeDeItemsNoCarrinho(quantidade: string){
        cy.get('[data-test=shopping-cart-badge]')
            .should('be.visible')
            .and('have.text', `${quantidade}`);
    }

    verificaItemDoCarrinho(){
        cy.get('[data-test=shopping-cart-link]').click();
        
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html');

        cy.get('[data-test=inventory-item-name]').should(
            'have.text',
            'Sauce Labs Backpack');
    }

    removerItemDoCarrinho(){
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();

        cy.get('[data-test=shopping-cart-badge]')
            .should('be.visible')
            .and('have.text', '1');

        cy.get('[data-test=shopping-cart-link]').click();

        cy.url().should('eq', 'https://www.saucedemo.com/cart.html');

        cy.get('[data-test=remove-sauce-labs-backpack]').click();

        cy.get('.removed_cart_item').should('exist');
    };
}

export default new Invetory();