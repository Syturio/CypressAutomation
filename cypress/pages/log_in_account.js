/// <reference types="cypress"/>

import { navigate_To } from './navigate_to'
import { insert_Username, insert_Password, click_SignIn_Button } from './login_form'

export function log_In()
{
  cy.fixture('url.json').then((data) =>
  {
    navigate_To(data.main_page)
  })

  cy.get('#signin_button')
    .click()

  cy.fixture('login.json').then((data) =>
  {
    insert_Username(data.valid_username)
    insert_Password(data.valid_password)
  })

  click_SignIn_Button()
}