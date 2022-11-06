describe('Go to UCLC website', () => {
  it('passes', () => {
    cy.visit('https://google.com') // 'https://app-dev.uclc.hr:8080/' //go to UCLC web-app
    //cy.CookieUCLC();
  })
})
/*   
  // cy.get('button').contains('Prihvaćam sve').click().wait(2000)  // Acept Cookies
describe('Login', () => {
  it('passes', () =>{
    cy.CookieUCLC();
    cy.get('button').contains('Prijava').click()  // Click on Login [Prijava]
    })
  })

describe('Username & password', () => {
  it('passes', () =>{
    cy.CookieUCLC();
    cy.get(`[name="username"]`).type('test')
    cy.get(`[name="password"]`).type('test')
    cy.get(`[type="submit"]`).click() 
    })
  })

describe('Dashboard icons check:', () => {
    
  describe('1. UniCredit logo', () => {
   it('passes', () =>{
    cy.CookieUCLC();
      cy.get('#Layer_2').click()
  })
 })
  
  describe('2. KONTAKT', () => {
    it('passes', () =>{
    cy.CookieUCLC();
    cy.get('button').contains('O nama').click()
   })
  })
  describe('3. O NAMA', () => {
   it('passes', () =>{
     cy.CookieUCLC();
    cy.get('button').contains('Kontakt').click()
   })
  })
  describe('4. TRAŽILICA', () => {
    it('passes', () =>{
       cy.CookieUCLC();
      cy.get('button').contains('Tražilica').click()
    })
     })
   describe('5. PROFIL', () => {
    it('passes', () =>{
      cy.CookieUCLC();
      cy.get('button').contains('Pero Peric').click()
    })
   })
   describe('6. INBOX', () => {
    it('passes', () =>{
      cy.CookieUCLC();
      cy.get('button').contains('Inbox').click()
    })
    })

    // _______ Vidi sa developeri u vezi sigurnosnog odjavljivanja ________
   //describe('7. ODJAVA', () => {
   //  it('passes', () =>{
   //   cy.CookieUCLC()
   //   cy.get('button').contains('Odjava').click()
   // })
   //})
  }) */
