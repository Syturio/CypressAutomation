/// <reference types="cypress"/>

export function select_Purchase_Foreign_Currency_Name(currency, abbreviation)
{
  cy.get('#pc_currency')
    .select(currency)
    .should('have.value', abbreviation)
}

export function insert_Purchase_Foreign_Currency_Amount(amount)
{
  cy.get('#pc_amount')
    .type(amount)
    .should('have.value', amount)
}

export function click_Purchase_Foreign_Currency_Purchase_Button()
{
  cy.get('#purchase_cash')
    .click()
}