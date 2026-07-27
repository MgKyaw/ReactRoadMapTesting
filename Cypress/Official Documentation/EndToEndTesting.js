it('adds todos', () => {
  cy.visit('https://example.cypress.io/')
  cy.get('[data-cy="new-todo"]').type('write tests{enter}')
  // confirm the application is showing one item
  cy.get('[data-cy="todos"]').should('have.length', 1)
})