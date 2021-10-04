/// <reference types="cypress"/>

export function select_Saved_Payee(payee)
{
  cy.get('#sp_payee')
    .select(payee)
    .should('have.value', payee)
}

export function select_Saved_Payee_Account(account)
{
  cy.get('#sp_account')
    .select(account)
    .should('have.value', account)
}

export function insert_Saved_Payee_Amount(amount)
{
  cy.get('#sp_amount')
    .type(amount)
    .should('have.value', amount)
}

export function select_Saved_Payee_Date(date)
{
  cy.get('#sp_date')
    .type(date)
    .should('have.value', date)
  
  cy.get('.ui-datepicker-current-day > .ui-state-default')
    .click()
}

export function insert_Saved_Payee_Description(description)
{
  cy.get('#sp_description')
    .type(description)
    .should('have.value', description)
}

export function click_Saved_Payee_Pay_Button()
{
  cy.get('#pay_saved_payees')
    .click()
}