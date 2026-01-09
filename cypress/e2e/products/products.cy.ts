import inventory from "../../pages/inventory";

describe('Inventory', () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");
        cy.login();
    });

    it('Adicionar item ao carrinho', () => {
        inventory.verificarUrl();
        inventory.adicionaItemAoCarrinho("sauce-labs-backpack");
        inventory.varificaQuantidadeDeItemsNoCarrinho("1");
        inventory.verificaItemDoCarrinho();
    });

    it('Adicionar mais de um item ao carrinho ', () => {
        inventory.adicionaItemAoCarrinho('sauce-labs-backpack');
        inventory.adicionaItemAoCarrinho('sauce-labs-bolt-t-shirt');
        inventory.varificaQuantidadeDeItemsNoCarrinho("2");
    });

    it('Remover item do carrinho', () => {
        inventory.removerItemDoCarrinho();
    });
});