Cypress.Commands.add('listarCupons', () => {
  return cy.request({
    method: 'GET',
    url: '/coupons',
    headers: {
      Authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
    }
  })
})

Cypress.Commands.add('criarCupom', (codigo) => {
  return cy.request({
    method: 'POST',
    url: '/coupons',
    headers: {
      Authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy',
      'Content-Type': 'application/json'
    },
    body: {
      code: codigo,
      amount: '10.00',
      discount_type: 'fixed_product',
      description: 'Cupom criado via Cypress'
    }
  })
})