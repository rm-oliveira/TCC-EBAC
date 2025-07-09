/// <reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page"

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    })

    it('Deve adicionar 3 produtos diferentes no carrinho', () => {
        let produto1 = 'Ajax Full-Zip Sweatshirt'
        produtosPage.buscarProduto(produto1)
        produtosPage.addProdutoCarrinho('S', 'Blue', '2')
        let produto2 = 'Abominable Hoodie'
        produtosPage.buscarProduto(produto2)
        produtosPage.addProdutoCarrinho('S', 'Red', '1')
        let produto3 = 'Argus All-Weather Tank'
        produtosPage.buscarProduto(produto3)
        produtosPage.addProdutoCarrinho('S', 'Gray', '3')
        cy.get('.woocommerce-message > .button').click()
        cy.get('.product-name > a').should('contain', produto1, produto2, produto3)
        
    })
})