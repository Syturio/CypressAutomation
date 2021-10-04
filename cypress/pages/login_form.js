export function insert_Username(username)
{
  cy.get('#user_login')
    .type(username)
    .should('have.value', username)
}

export function insert_Password(password)
{
  cy.get('#user_password')
    .type(password)
    .should('have.value', password)
}

export function click_SignIn_Button()
{
  cy.get('.btn')
    .click()
}
