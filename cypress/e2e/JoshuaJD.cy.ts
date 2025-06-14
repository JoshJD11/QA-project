import 'cypress-xpath'


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


describe('Cerrar sesion', () => {
  
  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

    it('Iniciar sesion con cualquier cuenta para luego cerrarla exitosamente', () => {
      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('/html/body/header/nav/div/a[5]').click()
      cy.xpath('//*[@id="email"]').type('admin@admin.com')
      cy.xpath('//*[@id="password"]').type('password')
      cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
      cy.xpath('/html/body/header/nav/div[2]/span/span').contains('Admin')

      cy.xpath('//*[@id="header"]/div[1]/div/button').click()
      cy.xpath('/html/body/header/nav/div[2]/ul/li[7]/form/button').click()
      cy.contains('Admin').should('not.exist')
    })

})


describe('Ver contenido favorito del usuario actual', () => {
  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Dirigirse a la URL donde se muestra el contenido favorito del usuario actual', () => {
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('/html/body/header/nav/div/a[5]').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()

    cy.xpath('/html/body/header/div[1]/div/button').click()
    cy.xpath('/html/body/header/nav/div[2]/ul/li[1]/a').click()
    cy.url().should('include', 'favourites')
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


describe('Crear un nuevo usuario desde la cuenta de administrador usando la invitacion por correo', () => {
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
    cy.contains('chocoflupi.arbuquercovish@gmail.com')
  })

})



describe('Crear un usuario desde la cuenta de administrador utilizando la creacion manual de las credenciales', () => {
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

    cy.xpath('//*[@id="name"]').type('Pedro')
    cy.xpath('//*[@id="email"]').type('nuevo99@qa.com')

    cy.xpath('/html/body/div[4]/div/div/div/div/main/form/div[1]/div[3]/label[2]/span[1]').click()
    cy.xpath('//*[@id="password"]').type('mantecovish')
    cy.xpath('//*[@id="password-confirm"]').type('mantecovish')
    
    cy.xpath('/html/body/div[4]/div/div/div/div/main/form/div[1]/div[2]/div/div/div[4]/label/span[1]').click()
    cy.xpath('/html/body/div[4]/div/div/div/div/main/form/div[2]/button').click()
    cy.contains('nuevo99@qa.com')
  })
})



describe('Eliminar un usuario ajeno desde la cuenta de administrador', () => { 
  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Eliminar un usuario invitado por correo correctamente', () => {
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
    cy.contains('chocoflupi.arbuquercovish@gmail.com').should('not.exist')
  })

  it('Eliminar otro usuario cuyas credenciales fueron creadas manualmente', () => {
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('/html/body/header/nav/div/a[5]').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()

    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('/html/body/header/nav/div[1]/a[4]').click()
    cy.xpath('/html/body/div[4]/div/div/div/div/nav/a[4]').click()

    cy.contains('nuevo99@qa.com').click()
    cy.xpath('/html/body/div[4]/div/div/div/div/section[1]/form/div[2]/a[2]').click()
    cy.xpath('/html/body/div[4]/div/div/div/div/form/div/div[2]/div/button').click()
    cy.contains('chocoflupi.arbuquercovish@gmail.com').should('not.exist')
  })
})



describe('Crear un usuario con una contraseña que no cumple requisitos de seguridad', () => {
  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Crear usuario sin exito luego de ingresar contrasena invalida', () => {
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('/html/body/header/nav/div/a[5]').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()

    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('/html/body/header/nav/div[1]/a[4]').click()
    cy.xpath('/html/body/div[4]/div/div/div/div/nav/a[4]').click()
    cy.xpath('/html/body/div[4]/div/div/div/div/main/div[1]/div/a').click()

    cy.xpath('//*[@id="name"]').type('Petelgueuse')
    cy.xpath('//*[@id="email"]').type('Romanicontii@qa.com')

    cy.xpath('/html/body/div[4]/div/div/div/div/main/form/div[1]/div[3]/label[2]/span[1]').click()
    cy.xpath('//*[@id="password"]').type('psw')
    cy.xpath('//*[@id="password-confirm"]').type('psw')

    cy.xpath('/html/body/div[4]/div/div/div/div/main/form/div[2]/button').click()
    cy.contains('The password must be at least 8 characters.').should('be.visible')
  })

})


describe('Crear una estanteria', () => {
  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Crear estanteria exitosamente', () => {

    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('/html/body/header/nav/div/a[5]').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()

    cy.xpath('/html/body/header/div[1]/div/button').click()
    cy.xpath('/html/body/header/nav/div[1]/a[2]').click()

    cy.xpath('/html/body/div[4]/div[1]/div/button[1]').click()
    cy.xpath('/html/body/div[4]/div[2]/div[1]/div/div[1]/aside/div/div/a[1]').click()
    cy.xpath('//*[@id="name"]').type('Estante prron')
    cy.xpath('/html/body/div[4]/div/div/div/div/main/form/div[6]/button').click()
    cy.contains('Admin created shelf Estante prron').should('exist')
  })
  
})


describe('Creación fallida de una estanteria por datos insuficientes.', () => {
  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Creacion de estante sin nombre', () => {
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('/html/body/header/nav/div/a[5]').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()

    cy.xpath('/html/body/header/div[1]/div/button').click()
    cy.xpath('/html/body/header/nav/div[1]/a[2]').click()

    cy.xpath('/html/body/div[4]/div[1]/div/button[1]').click()
    cy.xpath('/html/body/div[4]/div[2]/div[1]/div/div[1]/aside/div/div/a[1]').click()
    cy.xpath('/html/body/div[4]/div/div/div/div/main/form/div[6]/button').click()

    cy.url().should('include', 'create-shelf')
    cy.contains('The name field is required.').should('be.visible')
  })

})


describe('Eliminar una estanteria con exito', () => { 
  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Buscar una estanteria y eliminarla', () => {

    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('/html/body/header/nav/div/a[5]').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()

    cy.xpath('/html/body/header/div[1]/div/button').click()
    cy.xpath('/html/body/header/nav/div[1]/a[2]').click()

    cy.xpath('/html/body/div[4]/div[2]/div[2]/div/main/div[2]/a').contains('Estante prron').click()
    cy.xpath('/html/body/div[4]/div[1]/div/button[1]').click()
    cy.xpath('/html/body/div[4]/div[2]/div[1]/div/div[1]/aside/div/div/a[4]/span[2]').click()
    cy.xpath('/html/body/div[4]/div/div/div/div/div[2]/div/form/button').click()
    cy.contains('Estante prron').should('not.exist')
    
  })
  
})

describe('Abrir la papelera de reciclaje y verificar que un elemento que ha sido borrado anteriormente', () => { 
  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Dirigirse a la papelera de reciclaje', () => {

    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('/html/body/header/nav/div/a[5]').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()

    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('/html/body/header/nav/div[1]/a[4]').click()
    cy.xpath('/html/body/div[4]/div/div/div/div/nav/a[2]').click()
    cy.xpath('/html/body/div[4]/div/div/div/div/div[1]/div/div[2]/a').click()

    cy.contains('Estante prron').should('exist')
    cy.url().should('include', 'recycle-bin')
  })

})


describe('Eliminar un elemento permanentemente', () => { 
  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Dirigirse a la papelera para eliminar un elemento', () => {
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('/html/body/header/nav/div/a[5]').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()

    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('/html/body/header/nav/div[1]/a[4]').click()
    cy.xpath('/html/body/div[4]/div/div/div/div/nav/a[2]').click()
    cy.xpath('/html/body/div[4]/div/div/div/div/div[1]/div/div[2]/a').click()

    cy.contains('.item-list-row.flex-container-row.items-center.px-s.wrap', 'Estante prron').within(() => {
      cy.get('button.button.outline').click()
      cy.contains('a.text-item', 'Permanently Delete').click()
    })

    cy.xpath('/html/body/div[4]/div/div/div/div/div/form/button').click()
    cy.contains('Estante prron').should('not.exist')

  })
})




