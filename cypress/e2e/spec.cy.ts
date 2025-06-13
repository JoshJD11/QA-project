import '../../node_modules/cypress-xpath'


Cypress.on('uncaught:exception', (err, runnable) => {  
  return false;
});



describe('Iniciar sesion con usuario existente', () => {

  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Iniciar sesion', () => {
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('/html/body/header/nav/div/a[5]').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
    cy.xpath('/html/body/header/nav/div[2]/span/span').contains('Admin')
    
  })
})


describe('Iniciar sesion con usuario existente pero con una contrasena erronea', () => {

  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Intentar iniciar sesion', () => {
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('/html/body/header/nav/div/a[5]').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('cualquiervara')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[1]/div[1]/div').contains('Estas credenciales no coinciden con nuestros registros.')
    cy.url().should('include', 'login')
  })
})


describe('Activar el modo oscuro', () => { //Ojo con el idioma que se cambia a la hora de hacer la prueba
  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Presionar boton para activar modo oscuro', () => {
    cy.xpath('/html/body/div[4]/div/div/div/div[1]/div[2]/div/form/button/span[2]').contains('Dark Mode')
    cy.xpath('/html/body/div[4]/div/div/div/div[1]/div[2]/div/form/button').click()
    cy.xpath('/html/body/div[4]/div/div/div/div[1]/div[2]/div/form/button/span[2]').contains('Modo Claro')
  })

})


describe('Activar el modo claro', () => {
  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Presionar boton para activar modo claro', () => {
    cy.xpath('/html/body/div[4]/div/div/div/div[1]/div[2]/div/form/button').click()
    cy.xpath('/html/body/div[4]/div/div/div/div[1]/div[2]/div/form/button/span[2]').contains('Modo Claro')
    cy.xpath('/html/body/div[4]/div/div/div/div[1]/div[2]/div/form/button').click()
    cy.xpath('/html/body/div[4]/div/div/div/div[1]/div[2]/div/form/button/span[2]').contains('Modo Oscuro')
  })

})


describe('Crear un nuevo usuario desde la cuenta de administrador', () => {
  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Crear nuevo usuario exitosamente', () => {

    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('/html/body/header/nav/div/a[5]').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()

    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('/html/body/header/nav/div[1]/a[4]').click()
    cy.xpath('/html/body/div[4]/div/div/div/div/nav/a[4]').click()
    cy.xpath('/html/body/div[4]/div/div/div/div/main/div[1]/div/a').click()

    cy.xpath('//*[@id="name"]').type('Mariana')
    cy.xpath('//*[@id="email"]').type('chocoflupi.arbuquercovish@gmail.com')
    cy.xpath('/html/body/div[4]/div/div/div/div/main/form/div[1]/div[2]/div/div/div[4]/label/span[1]').click()
    cy.xpath('/html/body/div[4]/div/div/div/div/main/form/div[2]/button').click()
    cy.xpath('/html/body/div[4]/div/div/div/div/main/div[3]/div[4]/div[1]/a').contains('Mariana')
  })

})


describe('Eliminar un usuario ajeno desde la cuenta de administrador', () => {
  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Eliminar un usuario correctamente', () => {
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('/html/body/header/nav/div/a[5]').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()

    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('/html/body/header/nav/div[1]/a[4]').click()
    cy.xpath('/html/body/div[4]/div/div/div/div/nav/a[4]').click()

    cy.contains('chocoflupi.arbuquercovish@gmail.com').click()
    cy.xpath('/html/body/div[4]/div/div/div/div/section[1]/form/div[2]/a[2]').click()
    cy.xpath('/html/body/div[4]/div/div/div/div/form/div/div[2]/div/button').click()
    cy.xpath('/html/body/div[1]/span').contains('chocoflupi.arbuquercovish@gmail.com').should('not.exist')
  })
})

