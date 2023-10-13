describe('Home Page', () => {
  it('visits the Home Page', () => {
    cy.visit('/')
    cy.contains('h1', 'Rick and Morty Cards')
  })

  it('clicked on the logo for reload page', () => {
    cy.visit('/')
    cy.get('.logo').click()
    cy.contains('h2', 'Summer Smith')
  })

  it('performs a search and returns the search term', () => {
    cy.visit('/')
    cy.get('[data-cy="search"]').type('diane')
    cy.get('[data-cy="button"]').click()
    cy.contains('h2', 'Diane Sanchez')
  })

  it('performs a search and returns the error message', () => {
    cy.visit('/')
    cy.get('[data-cy="search"]').type('notfound')
    cy.get('[data-cy="button"]').click()
    cy.contains('h3', 'Ops, no characters found!')
  })

  it('filters the items and returns the expected value', () => {
    cy.visit('/')
    cy.get('[data-cy="buttons"] > button:nth-child(3)').click()
    cy.contains('h2', 'Albert Einstein')
  })

  it('clicks on the pagination button and navigate to another page', () => {
    cy.visit('/')
    cy.get('[data-cy="pagination"] > .item').contains('2').click()
    cy.contains('h2', 'Aqua Morty')
  })

  it('clicks on the character and redirect to the single page', () => {
    cy.visit('/')
    cy.contains('h2', 'Abadango Cluster Princess')
    cy.get('.card-item:nth-child(6)').click()
    cy.contains('h1', 'Abadango Cluster Princess')
  })
})
