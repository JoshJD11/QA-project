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


  describe('Enviar un correo de prueba', () => { 
    beforeEach(function () {
      cy.visit('http://localhost:8080/')
    })
  
    it('Envio de email', () => {
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="email"]').type('admin@admin.com')
      cy.xpath('//*[@id="password"]').type('password')
      cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
  
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="header"]/nav/div[1]/a[4]').click()
      cy.xpath('//*[@id="main-content"]/div/nav/a[2]').click()
      cy.xpath('//*[@id="send-test-email"]/div/div[2]/form/button').click()
      cy.xpath('/html/body/div[1]/span').contains('Email sent to admin@admin.com')
  
      
    })
  })

  describe('Resetear el avatar de usuario', () => {
    beforeEach(function () {
      cy.visit('http://localhost:8080/')
    })
  
    it('Reiniciar foto de perfil', () => {
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="email"]').type('admin@admin.com')
      cy.xpath('//*[@id="password"]').type('password')
      cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="header"]/nav/div[2]/ul/li[3]/a').click()
      
      cy.xpath('//*[@id="main-content"]/div/div/div[2]/section[1]/form/div[2]/div[3]/div[2]/div/div/div[2]/button').click();

      cy.xpath('//*[@id="main-content"]/div/div/div[2]/section[1]/form/div[2]/div[3]/div[2]/div/div/div[1]/img').and('have.attr', 'refs', 'image-picker@image')
  
  
    })
  })
  


  describe('Borrar cuenta', () => {
    beforeEach(function () {
      cy.visit('http://localhost:8080/')
    })
  
    it('Borra el usuario', () => {
  
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="email"]').type('admin@admin.com')
      cy.xpath('//*[@id="password"]').type('password')
      cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
  
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('/html/body/header/nav/div[1]/a[4]').click()
      cy.xpath('/html/body/div[4]/div/div/div/div/nav/a[4]').click()
      cy.xpath('/html/body/div[4]/div/div/div/div/main/div[1]/div/a').click()
  
      cy.xpath('//*[@id="name"]').type('Pedro')
      cy.xpath('//*[@id="email"]').type('nuevo99@qa.com')
  
      cy.xpath('/html/body/div[4]/div/div/div/div/main/form/div[1]/div[3]/label[2]/span[1]').click()
      cy.xpath('//*[@id="password"]').type('mantecovish')
      cy.xpath('//*[@id="password-confirm"]').type('mantecovish')
      
      cy.xpath('/html/body/div[4]/div/div/div/div/main/form/div[1]/div[2]/div/div/div[4]/label/span[1]').click()
      cy.xpath('/html/body/div[4]/div/div/div/div/main/form/div[2]/button').click()
      cy.contains('nuevo99@qa.com')

      cy.xpath('//*[@id="header"]/div[1]/div').click()
      cy.xpath('//*[@id="header"]/nav/div[2]/ul/li[7]/form/button/div').click()

      
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="email"]').type('nuevo99@qa.com')
      cy.xpath('//*[@id="password"]').type('mantecovish')
      cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
  
      cy.xpath('//*[@id="header"]/div[1]/div').click()
      cy.xpath('//*[@id="header"]/nav/div[2]/ul/li[3]/a/div').click()

      cy.xpath('//*[@id="main-content"]/div/div/div[2]/section/form/div[3]/a').click()
      cy.xpath('//*[@id="main-content"]/div/div/div[2]/div/form/div/div/button').click()

      cy.xpath('//*[@id="email"]').should('have.value', '');
   

    })
  })



  describe('Ordenar los roles de usuario según los usuarios asignados al rol', () => { 
    beforeEach(function () {
      cy.visit('http://localhost:8080/')
    })
  
    it('Seleccion filtro Assigned Users', () => {
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="email"]').type('admin@admin.com')
      cy.xpath('//*[@id="password"]').type('password')
      cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
  
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="header"]/nav/div[1]/a[4]').click()



      cy.xpath('//*[@id="main-content"]/div/nav/a[5]').click()
      cy.xpath('//*[@id="main-content"]/div/div/div[2]/div[2]/div/form/div/div/ul/li[2]/a')
      .click({ force: true }) 
      cy.xpath('//*[@id="main-content"]/div/div/div[2]/div[2]/div/form/div/div').contains('Assigned Users')
    })
  })
  


  describe('Ordenar los roles de usuario según los permisos asignados al rol', () => { 
    beforeEach(function () {
      cy.visit('http://localhost:8080/')
    })
  
    it('Seleccion filtro Provided Permissions', () => {
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="email"]').type('admin@admin.com')
      cy.xpath('//*[@id="password"]').type('password')
      cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
  
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="header"]/nav/div[1]/a[4]').click()



      cy.xpath('//*[@id="main-content"]/div/nav/a[5]').click()
      cy.xpath('//*[@id="main-content"]/div/div/div[2]/div[2]/div/form/div/div/ul/li[3]/a')
      .click({ force: true }) 
      cy.xpath('//*[@id="main-content"]/div/div/div[2]/div[2]/div/form/div/div').contains('Provided Permissions')
    })
  })

  describe('Ordenar los roles de usuario según los permisos asignados al rol', () => { 
    beforeEach(function () {
      cy.visit('http://localhost:8080/')
    })
  
    it('Seleccion filtro Provided Permissions de ascendentemente', () => {
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="email"]').type('admin@admin.com')
      cy.xpath('//*[@id="password"]').type('password')
      cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
  
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="header"]/nav/div[1]/a[4]').click()



      cy.xpath('//*[@id="main-content"]/div/nav/a[5]').click()
      cy.xpath('//*[@id="main-content"]/div/div/div[2]/div[2]/div/form/div/div/ul/li[3]/a')
      .click({ force: true }) 
      cy.xpath('//*[@id="main-content"]/div/div/div[2]/div[2]/div/form/div/div').contains('Provided Permissions')
      cy.xpath('//*[@id="main-content"]/div/div/div[2]/div[2]/div/form/div/button')
      .should('have.attr', 'aria-label', 'Sort Direction Toggle - Sort Ascending')
    })
  })


  describe('Ordenar los roles de usuario según los permisos asignados al rol descendentemente', () => { 
    beforeEach(function () {
      cy.visit('http://localhost:8080/')
    })
  
    it('Seleccion filtro Provided Permissions de mayor a menor', () => {
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="email"]').type('admin@admin.com')
      cy.xpath('//*[@id="password"]').type('password')
      cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
  
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="header"]/nav/div[1]/a[4]').click()



      cy.xpath('//*[@id="main-content"]/div/nav/a[5]').click()
      cy.xpath('//*[@id="main-content"]/div/div/div[2]/div[2]/div/form/div/div/ul/li[3]/a')
      .click({ force: true }) 
      
      cy.xpath('//*[@id="main-content"]/div/div/div[2]/div[2]/div/form/div/button').click()

      cy.xpath('//*[@id="main-content"]/div/div/div[2]/div[2]/div/form/div/div').contains('Provided Permissions')
      cy.xpath('//*[@id="main-content"]/div/div/div[2]/div[2]/div/form/div/button')
      .should('have.attr', 'aria-label', 'Sort Direction Toggle - Sort Descending')

    })
  })

  describe('Ordenar los roles de usuario según su fecha de creación', () => { 
    beforeEach(function () {
      cy.visit('http://localhost:8080/')
    })
  
    it('Seleccion filtro Created Date', () => {
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="email"]').type('admin@admin.com')
      cy.xpath('//*[@id="password"]').type('password')
      cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
  
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="header"]/nav/div[1]/a[4]').click()



      cy.xpath('//*[@id="main-content"]/div/nav/a[5]').click()
      cy.xpath('//*[@id="main-content"]/div/div/div[2]/div[2]/div/form/div/div/ul/li[4]/a')
      .click({ force: true }) 
      

      cy.xpath('//*[@id="main-content"]/div/div/div[2]/div[2]/div/form/div/div').contains('Created Date')


    })
  })




  describe('Ordenar los roles de usuario según su fecha de actualizacion', () => { 
    beforeEach(function () {
      cy.visit('http://localhost:8080/')
    })
  
    it('Seleccion filtro Updated Date', () => {
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="email"]').type('admin@admin.com')
      cy.xpath('//*[@id="password"]').type('password')
      cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
  
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="header"]/nav/div[1]/a[4]').click()



      cy.xpath('//*[@id="main-content"]/div/nav/a[5]').click()
      cy.xpath('//*[@id="main-content"]/div/div/div[2]/div[2]/div/form/div/div/ul/li[5]/a')
      .click({ force: true }) 
      

      cy.xpath('//*[@id="main-content"]/div/div/div[2]/div[2]/div/form/div/div').contains('Updated Date')


    })
  })



  describe('Ordenar los usuarios por su nombre', () => { 
    beforeEach(function () {
      cy.visit('http://localhost:8080/')
    })
  
    it('Seleccion filtro Name', () => {
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="email"]').type('admin@admin.com')
      cy.xpath('//*[@id="password"]').type('password')
      cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
  
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="header"]/nav/div[1]/a[4]').click()

      cy.xpath('//*[@id="main-content"]/div/nav/a[4]').click()



      cy.xpath('//*[@id="main-content"]/div/main/div[2]/div[2]/div/form/div/div/div').click()
      cy.xpath('//*[@id="main-content"]/div/main/div[2]/div[2]/div/form/div/div/ul/li[1]/a')
      .click({ force: true }) 
      

      cy.xpath('//*[@id="main-content"]/div/main/div[2]/div[2]/div/form/div/div/div').contains('Name')


    })
  })


  describe('Ordenar los usuarios por su Email', () => { 
    beforeEach(function () {
      cy.visit('http://localhost:8080/')
    })
  
    it('Seleccion filtro Email', () => {
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="email"]').type('admin@admin.com')
      cy.xpath('//*[@id="password"]').type('password')
      cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
  
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="header"]/nav/div[1]/a[4]').click()

      cy.xpath('//*[@id="main-content"]/div/nav/a[4]').click()



      cy.xpath('//*[@id="main-content"]/div/main/div[2]/div[2]/div/form/div/div/div').click()
      cy.xpath('//*[@id="main-content"]/div/main/div[2]/div[2]/div/form/div/div/ul/li[2]/a')
      .click({ force: true }) 
      

      cy.xpath('//*[@id="main-content"]/div/main/div[2]/div[2]/div/form/div/div/div').contains('Email')


    })
  })



  describe('Ordenar los usuarios por su fecha de creación', () => { 
    beforeEach(function () {
      cy.visit('http://localhost:8080/')
    })
  
    it('Seleccion filtro Created Date', () => {
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="email"]').type('admin@admin.com')
      cy.xpath('//*[@id="password"]').type('password')
      cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
  
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="header"]/nav/div[1]/a[4]').click()

      cy.xpath('//*[@id="main-content"]/div/nav/a[4]').click()



      cy.xpath('//*[@id="main-content"]/div/main/div[2]/div[2]/div/form/div/div/div').click()
      cy.xpath('//*[@id="main-content"]/div/main/div[2]/div[2]/div/form/div/div/ul/li[3]/a')
      .click({ force: true }) 
      

      cy.xpath('//*[@id="main-content"]/div/main/div[2]/div[2]/div/form/div/div/div').contains('Created Date')


    })
  })


  describe('Ordenar los usuarios por su fecha de actualización ', () => { 
    beforeEach(function () {
      cy.visit('http://localhost:8080/')
    })
  
    it('Seleccion filtro Updated Date', () => {
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="email"]').type('admin@admin.com')
      cy.xpath('//*[@id="password"]').type('password')
      cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
  
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="header"]/nav/div[1]/a[4]').click()

      cy.xpath('//*[@id="main-content"]/div/nav/a[4]').click()



      cy.xpath('//*[@id="main-content"]/div/main/div[2]/div[2]/div/form/div/div/div').click()
      cy.xpath('//*[@id="main-content"]/div/main/div[2]/div[2]/div/form/div/div/ul/li[4]/a')
      .click({ force: true }) 
      

      cy.xpath('//*[@id="main-content"]/div/main/div[2]/div[2]/div/form/div/div/div').contains('Updated Date')


    })
  })


  describe('Ordenar usuarios por última actividad ', () => { 
    beforeEach(function () {
      cy.visit('http://localhost:8080/')
    })
  
    it('Seleccion filtro Latest Activity', () => {
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="email"]').type('admin@admin.com')
      cy.xpath('//*[@id="password"]').type('password')
      cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
  
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('//*[@id="header"]/nav/div[1]/a[4]').click()

      cy.xpath('//*[@id="main-content"]/div/nav/a[4]').click()



      cy.xpath('//*[@id="main-content"]/div/main/div[2]/div[2]/div/form/div/div/div').click()
      cy.xpath('//*[@id="main-content"]/div/main/div[2]/div[2]/div/form/div/div/ul/li[5]/a')
      .click({ force: true }) 
      

      cy.xpath('//*[@id="main-content"]/div/main/div[2]/div[2]/div/form/div/div/div').contains('Latest Activity')


    })
  })