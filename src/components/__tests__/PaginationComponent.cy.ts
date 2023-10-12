import PaginationComponent from '../PaginationComponent.vue'
import { setActivePinia, createPinia } from 'pinia'

describe('PaginationComponent', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('render', () => {
    cy.mount(PaginationComponent)
    cy.get('[data-cy="pagination"] > .item').should('be.visible')
  })
})