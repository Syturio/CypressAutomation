/// <reference types="cypress"/>

import { log_In } from '../pages/log_in_account'

it('Logout', () =>
{
  // Entra no site e faz login com uma conta válida.
  log_In()

  cy.get(':nth-child(3) > .dropdown-toggle')
    .click()

  cy.get('#logout_link')
    .click()

  // Valida que fez logout com sucesso.
  cy.get('#signin_button')
    .should('be.visible')
})