describe('Verify Login Funtionnality', () => {
    it('Verify Login with valid credential', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('input[placeholder="Username"]').type("Admin")
      cy.get('input[type="password"]').type("admin123")
      cy.get('button[type="submit"]').click()
      cy.contains('Dashboard').should("be.visible")
    })
    it('Verify Login with valid Username and invalid password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[placeholder="Username"]').type("Admin")
        cy.get('input[type="password"]').type("admin12")
        cy.get('button[type="submit"]').click()
        cy.contains('Invalid credentials').should("be.visible")
      })
      it('Verify Login with invalid Username valid password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[placeholder="Username"]').type("Admin4")
        cy.get('input[type="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.contains('Invalid credentials').should("be.visible")
      })
      it('Verify Login with invalid Username invalid password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[placeholder="Username"]').type("Amdmin")
        cy.get('input[type="password"]').type("admin1234")
        cy.get('button[type="submit"]').click()
        cy.contains('Invalid credentials').should("be.visible")
      })
  })