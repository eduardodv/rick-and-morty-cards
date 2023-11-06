import CardItem from '../CardItem.vue'
import { setActivePinia, createPinia } from 'pinia'

describe('CardItem', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    
    cy.fixture('characterCard').then((characterCardData) => {
      cy.mount(CardItem, {
        props: characterCardData,
      })
    })
  })

  it('render', () => {
    cy.get('.card-item').should('be.visible')
  })

  it('render image', () => {
    cy.get('.image').find('img').should('have.attr', 'src', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg')
  })

  it('render title', () => {
    cy.contains('h2', 'Rick Sanchez')
  })

  it('render status', () => {
    cy.contains('div', 'Alive')
  })

  it('render species', () => {
    cy.contains('div', 'Human')
  })

  it('render last known location', () => {
    cy.contains('p', 'Citadel of Ricks')
  })

  it('render first seen', () => {
    cy.contains('p', 'Pilot')
  })
})