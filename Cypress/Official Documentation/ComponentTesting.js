import Button from './Button'

it('uses custom text for the button label', () => {
  cy.mount(<Button>Click me!</Button>)
  // Assert that a button component has the correct text
  cy.get('button').should('contains.text', 'Click me!')
})