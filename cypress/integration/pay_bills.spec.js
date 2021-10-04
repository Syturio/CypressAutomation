/// <reference types="cypress"/>

import { log_In } from '../pages/log_in_account'

import { insert_New_Payee_Name,
         insert_New_Payee_Address,
         insert_New_Payee_Account,
         insert_New_Payee_Details,
         click_New_Payee_Add_Button } from '../pages/pay_bills/add_new_payee'

import { select_Saved_Payee,
         select_Saved_Payee_Account,
         insert_Saved_Payee_Amount,
         select_Saved_Payee_Date,
         insert_Saved_Payee_Description,
         click_Saved_Payee_Pay_Button } from '../pages/pay_bills/pay_saved_payee'

import { select_Purchase_Foreign_Currency_Name,
         insert_Purchase_Foreign_Currency_Amount,
         click_Purchase_Foreign_Currency_Purchase_Button} from '../pages/pay_bills/purchase_foreign_currency'

describe('Pay Bills', () =>
{
  beforeEach(() =>
  {
    // Entra no site e faz login com uma conta válida.
    log_In()

    cy.get('#pay_bills_tab > a')
      .click()
  })

  it('Successful Add New Payee', () =>
  {
    cy.get('.ui-tabs-nav > :nth-child(2) > a')
      .click()

    insert_New_Payee_Name('Tiago')
    insert_New_Payee_Address('Serta')
    insert_New_Payee_Account('Savings')
    insert_New_Payee_Details('Teste')

    click_New_Payee_Add_Button()

    cy.get('#alert_content')
      .contains('was successfully created')
      .should('be.visible')
  })

  it('Pay saved Payee', () =>
  {
    select_Saved_Payee('sprint')
    select_Saved_Payee_Account('3')
    insert_Saved_Payee_Amount('20')
    select_Saved_Payee_Date('2021-09-01')
    insert_Saved_Payee_Description('Teste')

    click_Saved_Payee_Pay_Button()

    cy.get('#alert_content')
      .contains('The payment was successfully submitted.')
      .should('be.visible')
  })

  it('Purchase Foreign Currency', () =>
  {
    cy.get('.ui-tabs-nav > :nth-child(3) > a')
      .click()

    select_Purchase_Foreign_Currency_Name('Australia (dollar)', 'AUD')
    insert_Purchase_Foreign_Currency_Amount('50')

    // Seleciona "U.S. dollar (USD)".
    cy.get('.controls > :nth-child(3)')
      .click()

    click_Purchase_Foreign_Currency_Purchase_Button()

    cy.get('#alert_content')
      .contains('Foreign currency cash was successfully purchased.')
      .should('be.visible')
  })

  it('Unsuccessful Calculate Costs', () =>
  {
    cy.get('.ui-tabs-nav > :nth-child(3) > a')
      .click()

    select_Purchase_Foreign_Currency_Name('Australia (dollar)', 'AUD')

    // Confirma que o amount está vazio.
    cy.get('#pc_amount')
      .should('be.empty')

    // Seleciona "U.S. dollar (USD)".
    cy.get('.controls > :nth-child(3)')
      .click()

    // Clica no botão para calcular.
    cy.get('#pc_calculate_costs')
      .click()

    // Validar em como não apareçeu o valor da conversão.
    cy.get('#pc_conversion_amount')
      .should('be.empty')
  })
})