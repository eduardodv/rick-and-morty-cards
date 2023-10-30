import HeaderComponent from '../HeaderComponent.vue'
import { setActivePinia, createPinia } from 'pinia'

describe('HeaderComponent', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
   
  it('render', () => {
    cy.mount(HeaderComponent)
    cy.get('[data-cy="logo"]').find("img").should('be.visible');
  })

  it('render search component', () => {
    cy.mount(HeaderComponent)
    cy.get('[data-cy="search"]').should('be.visible');
  })

  it('it checks if the button doesn`t exist on the page', () => {
    cy.mount(HeaderComponent)
    cy.get('[data-cy="back-button"]').should('not.exist')
  })
})