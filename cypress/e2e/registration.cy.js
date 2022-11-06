describe('Go to UCLC', () => {
    it('passes', () => {
      cy.visit('https://app-dev.uclc.hr:8080/') // 
      //cy.CookieUCLC(); // accept Cookies, [Zm]
    })
  })
  
describe('Registration', () => {
   it('passes', () =>{
      cy.CookieUCLC();
      cy.get('button').contains('Registriraj se').click()  // Click on Registration
    })
  })

describe('Click on Fizička osoba', () => {
    it('passes', () =>{
      cy.CookieUCLC();
      cy.get('div').contains('Fizička osoba').click()
  })
})

describe('Registracija', () => {
  it('Osnovne informacije', () =>{
    cy.CookieUCLC();
    cy.get(`[placeholder="Unesi ime"]`).type('Zohan')
    cy.get(`[placeholder="Unesi prezime"]`).type('Zohanovski')
    cy.get(`[placeholder="Unesi OIB"]`).type('36281091553')
    // cy.get('input').contains('Muški').should('be.checked');
    cy.get('[placeholder="Odaberite datum"]').click()
    //cy.Xclick(30,'.ant-picker-super-prev-icon') // click 30 times on super prev-icon [Zm]
    //cy.Xclick(5, '.ant-picker-next-icon') // click 5 times on super next-icon [Zm]
    cy.get('div').contains('29').click()
    //cy.get(`[type="submit"]`).click()
    })
  })
  // npx cypress run 'cypress/e2e/*.cy.js'
  // npx cypress run --spec 'cypress/e2e/registration.cy.js'
  // npx cypress open