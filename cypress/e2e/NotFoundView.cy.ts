describe('Not Found Page', () => {
  it('visits the Not Found Page', () => {
    cy.visit('/notfound')
    cy.contains('h1', 'The page you are trying to search has been moved')
  })

  it('clicked on the button and redirect to Home Page', () => {
    cy.visit('/notfound')
    cy.get('[data-cy="button"]').click()
    cy.contains('h1', 'Rick and Morty Cards')
  })
})
