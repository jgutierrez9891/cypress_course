describe('My First Test', () => {
    it('finds the content "type"', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
  
      cy.get('.search-keyword').type("Brocolli")
      cy.get('.search-button').click()
      cy.contains('ADD TO CART').click()
      cy.get('.cart-icon').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      //Assert cart info
      cy.get('.promoBtn').should('include.text','Apply')
      cy.get('.discountAmt').should('include.text',120)
      //Complete order
      cy.contains('Place Order').click()
    })
  })