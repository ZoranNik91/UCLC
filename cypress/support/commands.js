// method created by Zoran - [Zm]
Cypress.Commands.add('CookieUCLC', () => { //method which continuosly accepts UCLC cookies 
    cy.clearCookies();
    // cy.clearLocalStorage();
    if ( cy.contains("Postavke kolačića")){
        cy.get('button').contains('Prihvaćam sve').click().wait(1000)  // Acept Cookies
      }
 })

 Cypress.Commands.add('XClick', (x, y) => { // This method clicks X times
  for (i = 0; i <= x, i++;) {
    cy.get(y).click();
  }
})
 /* const COOKIE_NAME = "Postavke kolačića";
const COOKIE_VALUE = "Prihvaćam sve";

Cypress.on("window:before:load", window => {
  window.document.cookie = `${COOKIE_NAME}=${COOKIE_VALUE}`;
}); */

/* describe('Cookies', () => {
  it('passes', () =>{
    beforeEach(() => {
      Cypress.Cookies.preserveOnce('connect.sid') // Acept Cookies
    })
  })
}) */

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })