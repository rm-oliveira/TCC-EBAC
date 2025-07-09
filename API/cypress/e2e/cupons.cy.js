/// <reference types="cypress"/>

describe('Teste de API', () => {
  it('Deve listar todos os cupons cadastrados com sucesso', () => {
    cy.listarCupons().then((response) => { 
        cy.log(response) 
        expect(response.status).to.equal(200) 
        expect(response.body).to.be.an('array')
    }) 
  })

   it('Deve cadastrar um novo cupom com sucesso', () => {
    const codigoCupom = `Cupom${Date.now()}` 

      cy.criarCupom(codigoCupom).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.code).to.eq(codigoCupom.toLowerCase())
    })
  })
})