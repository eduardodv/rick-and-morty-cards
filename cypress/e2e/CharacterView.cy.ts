describe('Character Page', () => {
  it('visits the Character Page', () => {
    cy.visit('/character/1')
    cy.contains('h1', 'Rick Sanchez')
  })

  it('clicked on the logo and redirect to Home Page', () => {
    cy.visit('/character/1')
    cy.get('.logo').click()
    cy.contains('h1', 'Rick and Morty Cards')
  })

  it('clicked on the back button and redirect to Home Page', () => {
    cy.visit('/character/1')
    cy.get('.back').click()
    cy.contains('h1', 'Rick and Morty Cards')
  })
})
