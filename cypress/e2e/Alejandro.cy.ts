import 'cypress-xpath'


Cypress.on('uncaught:exception', (err, runnable) => {  
  return false;
});


describe('Restringir el registro para un dominio específico', () => { 
    beforeEach(function () {
      cy.visit('http://localhost:8080/')
    })
  
    it('Cambio del dominio', () => {
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="email"]').type('admin@admin.com')
      cy.xpath('//*[@id="password"]').type('password')
      cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
  
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="header"]/nav/div[1]/a[4]').click()
      cy.xpath('//*[@id="main-content"]/div/div/div[1]/nav/a[3]').click()
      cy.xpath('//*[@id="setting-registration-restrict"]').clear()
  
      cy.xpath('//*[@id="setting-registration-restrict"]').type('qa.com')
      cy.xpath('//*[@id="main-content"]/div/div/div[2]/div/form/div[2]/button').click()
      cy.xpath('//*[@id="setting-registration-restrict"]').should('have.value', 'qa.com');
  
    })
  })