/// <reference types="cypress"/>

import { log_In } from '../pages/log_in_account'

describe('Transfers', () =>
{
  beforeEach(() =>
  {
    // Entra no site e faz login com uma conta válida.
    log_In()
  })

  it('Transfer Money & Make Payments in Transfer Funds', () =>
  {
    cy.get('#transfer_funds_tab > a')
      .click()

    cy.get('#tf_fromAccountId')
      .select('3')
      .should('have.value', '3') // 'Savings' account.

    cy.get('#tf_toAccountId')
      .select('2')
      .should('have.value', '2') // 'Checking' account.

    cy.get('#tf_amount')
      .type('20')
      .should('have.value', '20')

    cy.get('#tf_description')
      .type('Teste')
      .should('have.value', 'Teste')

    cy.get('#btn_submit')
      .click()

    cy.get('.board-header')
      .contains('Transfer Money & Make Payments - Verify')
      .should('be.visible')
  })
})