import 'cypress-xpath'


Cypress.on('uncaught:exception', (err, runnable) => {  
  return false;
});






describe('Acceder a la papelera de reciclaje', () => {

  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Acceso a la papelera', () => {
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
   cy.xpath('//*[@id="header"]/div[1]/div/button').click()  
   cy.xpath('/html/body/header/nav/div[1]/a[4]').click()
   cy.xpath('/html/body/div[4]/div/div/div/div/nav/a[2]').click()
   cy.xpath('/html/body/div[4]/div/div/div/div/div[1]/div/div[2]/a').click()
  // cy.xpath('/html/body/div[4]/div/div/div/div/div/div[1]/div[2]/div/button').click()
  // cy.xpath('/html/body/div[4]/div/div/div/div/div/div[1]/div[2]/div/div/form/button').click()
   cy.xpath('//*[@id="main-content"]/div/div/div[3]/div[2]/p/em').contains('The recycle bin is currently empty')

   
   
  })
})


describe('Filtrar los registros de auditoría asociados a un tipo de evento específico', () => {

  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Seleccion filtro', () => {
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
   cy.xpath('//*[@id="header"]/div[1]/div/button').click()  
   cy.xpath('/html/body/header/nav/div[1]/a[4]').click()
   cy.xpath('//*[@id="main-content"]/div/nav/a[3]').click()
   cy.xpath('//*[@id="main-content"]/div/div/form/div[1]/button').click()
   cy.xpath('//*[@id="main-content"]/div/div/form/div[1]/ul/li[43]').click()
   cy.xpath('//*[@id="main-content"]/div/div/form/div[1]/button').contains('auth_login')
     
  })
})

describe('Filtrar los registros de auditoría que están asociados a un usuario específico', () => {

  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Seleccion filtro', () => {
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
   cy.xpath('//*[@id="header"]/div[1]/div/button').click()  
   cy.xpath('/html/body/header/nav/div[1]/a[4]').click()
   cy.xpath('//*[@id="main-content"]/div/nav/a[3]').click()
   cy.xpath('//*[@id="main-content"]/div/div/form/div[4]/div/div[1]').click()
   cy.xpath('/html/body/div[4]/div/div/div/div/div/form/div[4]/div/div[2]/div[3]/a[2]').click()
   cy.xpath('//*[@id="main-content"]/div/div/form/div[4]/div/div[1]').contains('Admin')
     
  })
})


describe('Ordenar por tipo de evento los registros de auditoría en el rol administrador ', () => {

  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Seleccion ordenamiento', () => {
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
   cy.xpath('//*[@id="header"]/div[1]/div/button').click()  
   cy.xpath('/html/body/header/nav/div[1]/a[4]').click() 
   cy.xpath('//*[@id="main-content"]/div/nav/a[3]').click()//boton guardado


   cy.xpath('//*[@id="main-content"]/div/div/div[1]/div[2]/div/form/div/div/div').click()
   cy.xpath('//*[@id="main-content"]/div/div/div[1]/div[2]/div/form/div/div/ul/li[2]').click()
   cy.xpath('//*[@id="main-content"]/div/div/div[1]/div[2]/div/form/div/div/div').contains('Event')



  })
})

/*
describe('Filtrar fecha de evento los registros de auditoría en el rol administrador ', () => {

  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Seleccion filtro', () => {
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
   cy.xpath('//*[@id="header"]/div[1]/div/button').click()  
   cy.xpath('/html/body/header/nav/div[1]/a[4]').click()
   cy.xpath('//*[@id="main-content"]/div/nav/a[3]').click()

   // Establecer fecha from (1 Enero 2025)
    cy.xpath('//*[@id="audit_filter_date_from"]').type('2025-01-01') 
    //  .should('have.value', '2025-01-01');
    
    // Establecer fecha to (1 Enero 2026)
    cy.xpath('//*[@id="audit_filter_date_to"]').type('2026-01-01') ;
     // .should('have.value', '2026-01-01');
    
   
   //cy.xpath('/html/body/div[4]/div/div/div/div/div/form/div[4]/div/div[2]/div[3]/a[2]').click()
   cy.xpath('//*[@id="audit_filter_date_from"]').contains('01/01/2025')
   cy.xpath('//*[@id="audit_filter_date_to"]').contains('01/01/2026')
  })
})
  
*/

describe('Cambiar nombre de usuario', () => {
  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Verificar valor del campo de nombre', () => {
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('//*[@id="header"]/nav/div[2]/ul/li[3]/a').click()
    
    
    cy.xpath('//*[@id="name"]').clear()                         
      .type('NombreNuevo88');          
    
    cy.xpath('//*[@id="main-content"]/div/div/div[2]/section[1]/form/div[3]/button').click()
    
    cy.xpath('//*[@id="name"]').should('have.value', 'NombreNuevo88')
    
    cy.visit('http://localhost:8080/') //CAMBIAR

    
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('//*[@id="header"]/nav/div[2]/ul/li[3]/a').click()
    
    
    cy.xpath('//*[@id="name"]').clear()                         
      .type('Admin');          
    
    cy.xpath('//*[@id="main-content"]/div/div/div[2]/section[1]/form/div[3]/button').click()
    
     




  })
})






describe('Ordenar correctamente los libros disponibles por su nombre', () => {

  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Seleccion ordenamiento', () => {
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
   cy.xpath('//*[@id="header"]/div[1]/div/button').click()  
   cy.xpath('//*[@id="header"]/nav/div[1]/a[3]').click()  //boton libros


   
   cy.xpath('//*[@id="main-content"]/main/div[1]/div/div/form/div/div/div').click()//boton ordenar


   cy.xpath('//*[@id="main-content"]/main/div[1]/div/div/form/div/div/ul/li[1]/a').click() //opcion Nombre
   cy.xpath('//*[@id="main-content"]/main/div[1]/div/div/form/div/div/div').contains('Name')



  })
})

describe('Ordenar correctamente los libros disponibles por su fecha de creación', () => {

  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Seleccion ordenamiento', () => {
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
   cy.xpath('//*[@id="header"]/div[1]/div/button').click()  
   cy.xpath('//*[@id="header"]/nav/div[1]/a[3]').click()  //boton libros


   
   cy.xpath('//*[@id="main-content"]/main/div[1]/div/div/form/div/div/div').click()//boton ordenar


   cy.xpath('//*[@id="main-content"]/main/div[1]/div/div/form/div/div/ul/li[2]').click() //opcion Fecha
   cy.xpath('//*[@id="main-content"]/main/div[1]/div/div/form/div/div/div').contains('Created Date')



  })
})

describe('Ordenar correctamente los libros disponibles según su última actualización.', () => {

  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Seleccion ordenamiento', () => {
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
   cy.xpath('//*[@id="header"]/div[1]/div/button').click()  
   cy.xpath('//*[@id="header"]/nav/div[1]/a[3]').click()  //boton libros


   
   cy.xpath('//*[@id="main-content"]/main/div[1]/div/div/form/div/div/div').click()//boton ordenar


   cy.xpath('//*[@id="main-content"]/main/div[1]/div/div/form/div/div/ul/li[3]').click() //opcion Fecha
   cy.xpath('//*[@id="main-content"]/main/div[1]/div/div/form/div/div/div').contains('Updated Date')



  })
})



describe('Ordenar estanterías por su nombre', () => {

  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Seleccion ordenamiento', () => {
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
   cy.xpath('//*[@id="header"]/div[1]/div/button').click()  
   cy.xpath('//*[@id="header"]/nav/div[1]/a[2]').click()  //boton libros


   
   cy.xpath('//*[@id="main-content"]/main/div[1]/div/div/form/div/div/div').click()//boton ordenar


   cy.xpath('//*[@id="main-content"]/main/div[1]/div/div/form/div/div/ul/li[1]').click() //opcion Nombre
   cy.xpath('//*[@id="main-content"]/main/div[1]/div/div/form/div/div/div').contains('Name')



  })
})

describe('Ordenar estanterías por su fecha de creación', () => {

  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Seleccion ordenamiento', () => {
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
   cy.xpath('//*[@id="header"]/div[1]/div/button').click()  
   cy.xpath('//*[@id="header"]/nav/div[1]/a[2]').click()  //boton libros


   
   cy.xpath('//*[@id="main-content"]/main/div[1]/div/div/form/div/div/div').click()//boton ordenar


   cy.xpath('//*[@id="main-content"]/main/div[1]/div/div/form/div/div/ul/li[2]').click() //opcion Created Date
   cy.xpath('//*[@id="main-content"]/main/div[1]/div/div/form/div/div/div').contains('Created Date')



  })
})


describe('Ordenar estanterías por su fecha de actualización', () => {

  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Seleccion ordenamiento', () => {
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
   cy.xpath('//*[@id="header"]/div[1]/div/button').click()  
   cy.xpath('//*[@id="header"]/nav/div[1]/a[2]').click()  //boton libros

   cy.xpath('//*[@id="main-content"]/main/div[1]/div/div/form/div/div/div').click()//boton ordenar

   cy.xpath('//*[@id="main-content"]/main/div[1]/div/div/form/div/div/ul/li[3]').click() //opcion Updated Date
   cy.xpath('//*[@id="main-content"]/main/div[1]/div/div/form/div/div/div').contains('Updated Date')



  })
})

describe('Cambiar el idioma de toda la página web para que esté en español', () => {
  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Cambiar el idioma de toda la página web para que esté en español', () => {
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('//*[@id="header"]/nav/div[2]/ul/li[3]/a').click()
    
    cy.xpath('//select[@id="user-language"]').select('Español');
    cy.xpath('//*[@id="main-content"]/div/div/div[2]/section[1]/form/div[3]/button').click()


    cy.xpath('//*[@id="user-language"]').contains('Español')
  

    cy.visit('http://localhost:8080/') //CAMBIAR

    
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('//*[@id="header"]/nav/div[2]/ul/li[3]/a').click()
    cy.xpath('//select[@id="user-language"]').select('Inglés');
    cy.xpath('//*[@id="main-content"]/div/div/div[2]/section[1]/form/div[3]/button').click()



  })
})


describe('Cambiar email de una cuenta', () => {
  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Verificar valor del campo de email', () => {
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('//*[@id="header"]/nav/div[2]/ul/li[3]/a').click()
    
    
    cy.xpath('//*[@id="email"]')  
      .clear()                         
      .type('QAET@gmail.com');          
    
    cy.xpath('//*[@id="main-content"]/div/div/div[2]/section[1]/form/div[3]/button').click() //Boton Guardar cambios
    
    cy.xpath('//*[@id="email"]').should('have.value', 'QAET@gmail.com')
    

    cy.visit('http://localhost:8080/') //CAMBIAR  

    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('//*[@id="header"]/nav/div[2]/ul/li[3]/a').click()
    
    
    cy.xpath('//*[@id="email"]')  
      .clear()                         
      .type('admin@admin.com');          
    
    cy.xpath('//*[@id="main-content"]/div/div/div[2]/section[1]/form/div[3]/button').click() //Boton Guardar cambios
    
    
    
    

  })
})


describe('La casilla de “recuérdame” desactivada no influye en el comportamiento del sitio al cerrar la sesión.', () => {
  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Verificar valor del campo de email', () => {
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('//*[@id="header"]/nav/div[2]/ul/li[7]/form/button').click()
    cy.xpath('//*[@id="email"]').should('have.value', '');
    
    
    

  })
})


describe('Hacer logout para salir de la cuenta actual', () => {
  beforeEach(function () {
    cy.visit('http://localhost:8080/')
  })

  it('Verificar valor del campo de email', () => {
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('//*[@id="email"]').type('admin@admin.com')
    cy.xpath('//*[@id="password"]').type('password')
    cy.xpath('/html/body/div[4]/div/div[2]/form/div[2]/div[2]/button').click()
    cy.xpath('//*[@id="header"]/div[1]/div/button').click()
    cy.xpath('//*[@id="header"]/nav/div[2]/ul/li[7]/form/button').click()
    cy.xpath('//*[@id="email"]').should('have.value', '');
    
    
    

  })
})
