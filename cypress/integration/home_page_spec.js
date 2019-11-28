describe('The Home Page', () => {

  it('successfully loads', () => {
    cy.visit('/')
  })

  it('check elements', () => {
    cy.visit('/')
    cy.get('header').should('exist')
    cy.get('article').should('exist')
    cy.get('footer').should('exist')
  })
})
