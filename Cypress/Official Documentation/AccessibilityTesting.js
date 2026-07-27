it('adds todos', () => {
  cy.visit('https://example.cypress.io/')
  cy.get('img#logo')
    // Assert that an image has the correct alt text
    .should('have.attr', 'alt', 'Cypress Logo')
})