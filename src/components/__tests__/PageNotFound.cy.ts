import PageNotFound from '../PageNotFound.vue'

describe('PageNotFound', () => {
  it('render text', () => {
    cy.mount(PageNotFound)
    cy.get('[data-cy="title"]').should('contain', 'The page you are trying')
  })

  it('render button', () => {
    cy.mount(PageNotFound)
    cy.get('[data-cy="button"]').should('contain', 'GET ME HOME')
  })
})
