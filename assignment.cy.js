describe('Verify Login Functionality', () => {
    it('verify login with valid credential', () => {
      cy.visit('https://the-internet.herokuapp.com/login')
      cy.get('input[id="username"]').type("tomsmith")
      cy.get('input[name="password"]').type("SuperSecretPassword!")
      cy.get('button[class="radius"]').click()
      cy.contains('Secure Area').should("be.visible")
    })
    it('verify login with valid username and invalid password', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('input[id="username"]').type("tomsmith")
        cy.get('input[name="password"]').type("SuperSecretPassword")
        cy.get('button[class="radius"]').click()
        cy.contains('Your password is invalid!').should("be.visible")
      })
      it('verify login with invalid username and valid password', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('input[id="username"]').type("tomsmit")
        cy.get('input[name="password"]').type("SuperSecretPassword!")
        cy.get('button[class="radius"]').click()
        cy.contains('Your username is invalid!').should("be.visible")
      })
      it('verify login with invalid username and invalid password', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('input[id="username"]').type("tomsmit")
        cy.get('input[name="password"]').type("SuperSecretPassword")
        cy.get('button[class="radius"]').click()
        cy.contains('Your username is invalid!').should("be.visible")
      })
  })