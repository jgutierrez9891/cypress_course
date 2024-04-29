describe('My First Test', () => {
    it('finds the content "type"', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
  
      cy.get('.search-keyword').type("Brocolli")
      cy.get('.search-button').click()
      cy.get('products ')
    })
  })