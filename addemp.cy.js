describe('Verify Login Funtionnality', () => {
    it('Verify Login with valid credential', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('input[placeholder="Username"]').type("Admin")
      cy.get('input[type="password"]').type("admin123")
      cy.get('button[type="submit"]').click()
      cy.contains('Dashboard').should("be.visible")
      cy.contains('PIM').click()
      cy.contains('Add Employee').click()
      cy.get('input[placeholder="First Name"]').type("Diwakar")
      cy.get('input[placeholder="Last Name"]').type('DKN')
      cy.get('button[type="submit"]').click()
    })
     
  })