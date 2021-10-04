import { navigateTo } from '../../pages/navigate_to'

describe('example to-do app', () => {

  it('displays two todo items by default', () => {
    cy.fixture('example.json').then((data) => {
      navigateTo(data.url)
      cy.get('h1').should('be.visible').and('contain', 'todos')
    })
  })
})
