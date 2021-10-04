/// <reference types="cypress"/>

import { log_In } from '../pages/log_in_account'

describe('Transactions', () =>
{
  // DÚVIDA: É mesmo preciso refazer o login em todos os testes? Não posso usar um "before"?
  beforeEach(() =>
  {
    // Entra no site e faz login com uma conta válida.
    log_In()

    cy.get('#account_activity_tab > a')
      .click()
  })

  it('List Transactions of an Account', () =>
  {
    cy.get('.ui-tabs-selected > a')
      .click()

    cy.get('#aa_accountId')
      .select('1')
      .should('have.value', '1') // 'Savings' account.

    cy.get('tbody > :nth-child(1) > :nth-child(1)')
      .get('tbody > :nth-child(1) > :nth-child(2)')
      .get('tbody > :nth-child(1) > :nth-child(3)')
      .get('tbody > :nth-child(1) > :nth-child(4)') // DÚVIDA: Isto funciona ???
      .should('be.visible')
  })

  it('Find a Transaction', () =>
  {
    cy.wait(2000) // É preciso um delay aqui para funcionar corretamente.

    cy.get('.ui-tabs-nav > :nth-child(2) > a')
      .click()

    cy.get('#aa_description')
      .type('OFFICE')

    cy.get('#aa_type')
      .select('Any')
  })
})