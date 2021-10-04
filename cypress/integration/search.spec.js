/// <reference types="cypress"/>

import { navigate_To } from '../pages/navigate_to'

describe('Search', () =>
{
  beforeEach(() =>
  {
    cy.fixture('url.json').then((data) =>
    {
      navigate_To(data.main_page)
    })
  })

  it('Make a general search in website', () =>
  {
    cy.fixture('search.json').then((data) =>
    {
      cy.get('#searchTerm')
        .type(data.query_funds)
        .type('{enter}')
    })

    cy.get('h2')
      .contains('Search Results:')
      .should('be.visible')
  })
})