it('adds a todo', () => {
  cy.request('POST', '/todos', { title: 'Write API Tests' })
    .its('body')
    .should('contain', { title: 'Write API Tests' })
})