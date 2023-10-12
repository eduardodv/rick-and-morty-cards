import FilterStatus from '../FilterStatus.vue'
import { setActivePinia, createPinia } from 'pinia'

describe('FilterStatus', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('render', () => {
    cy.mount(FilterStatus)
    cy.get('[data-cy="buttons"] > button:nth-child(2)').should('contain', 'Alive')
  })

  it('clicked filter', () => {
    cy.mount(FilterStatus)
    cy.get('[data-cy="buttons"] > button:nth-child(3)').click()
  })
})