import HeaderSearch from '../HeaderSearch.vue'
import { setActivePinia, createPinia } from 'pinia'

describe('HeaderSearch', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('render', () => {
    cy.mount(HeaderSearch)
    cy.get('[data-cy="search"]').should('exist')
    
  })
  
  it('clicked search button containing a term', () => {
    cy.mount(HeaderSearch)
    cy.get('[data-cy="search"]').type('morty')
    cy.get('[data-cy="button"]').click()
  })

  it('checked if API request returned success', () => {
    cy.request('https://rickandmortyapi.com/api/character?page=1&name=morty').then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('results').and.to.be.an('array');
    });
  })

  it('checked if API request returned error', () => {
    cy.request({
      url: 'https://rickandmortyapi.com/api/character?page=1&name=nonexistentterm',
      failOnStatusCode: false,
    })
    .its('status')
    .should('eq', 404);
  })
})

