/// <reference types="cypress"/>

import { navigate_To } from '../pages/navigate_to'
import { insert_Username, insert_Password, click_SignIn_Button } from '../pages/login_form'

describe('Login', () =>
{
  beforeEach(() =>
  {
    cy.fixture('url.json').then((data) =>
    {
      navigate_To(data.main_page)
    })

    cy.get('#signin_button')
      .click()
  })

  it('Successful Login', () =>
  {
    cy.fixture('login.json').then((data) =>
    {
      insert_Username(data.valid_username)
      insert_Password(data.valid_password)

      click_SignIn_Button()

      // Valida se fez mesmo login.
      cy.get(':nth-child(3) > .dropdown-toggle')
        .should('contain', data.valid_username)
    })
  })

  it('Unsuccessful Login', () =>
  {
    cy.fixture('login.json').then((data) =>
    {
      insert_Username(data.valid_username)
      insert_Password(data.invalid_password)
    })        

    click_SignIn_Button()

    // Valida se aparece o pop up com o erro.
    cy.get('.alert')
      .should('contain', 'Login and/or password are wrong.')
  })

  it('Missing Username on Login', () =>
  {
    // Valida se o username está em branco.
    cy.get('#user_login')
      .should('be.empty')

    cy.fixture('login.json').then((data) =>
    {
      insert_Password(data.valid_password)
    })

    click_SignIn_Button()

    // Valida se aparece o pop up com o erro.
    cy.get('.alert')
      .should('contain', 'Login and/or password are wrong.')
  })

  it('Missing Password on Login', () =>
  {
    cy.fixture('login.json').then((data) =>
    {
      insert_Username(data.valid_username)
    })

    cy.get('#user_password')
      .should('be.empty')

    click_SignIn_Button()

    // Valida se aparece o pop up com o erro.
    cy.get('.alert')
      .should('contain', 'Login and/or password are wrong.')
  })
})