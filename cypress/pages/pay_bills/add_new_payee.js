/// <reference types="cypress"/>

export function insert_New_Payee_Name(name)
{
  cy.get('#np_new_payee_name')
    .type(name)
}

export function insert_New_Payee_Address(address)
{
  cy.get('#np_new_payee_address')
    .type(address)
}

export function insert_New_Payee_Account(account)
{
  cy.get('#np_new_payee_account')
    .type(account)
}

export function insert_New_Payee_Details(details)
{
  cy.get('#np_new_payee_details')
    .type(details)
}

export function click_New_Payee_Add_Button()
{
  cy.get('#add_new_payee')
    .click()
}