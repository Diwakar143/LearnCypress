describe('verify the able to post somethin in buzz', () => {
    it('post some text ', () => {
      cy.visit('/web/index.php/auth/login')
      cy.wait(10000)
      cy.viewport('ipad-mini')
      cy.get('input[name="username"]').type("Admin1")
      cy.log("user able to type username")
      cy.get('input[type="password"]').type("admin123")
      cy.log("user able to type password")
      cy.get('button[type="submit"]').click()
      cy.contains('Dashboard').should("be.visible")
      cy.contains('Buzz').click()
      cy.contains('Buzz Newsfeed').should("be.visible")
      cy.get('textarea[class="oxd-buzz-post-input"]').type("Good Evening Diwakar")
      cy.get('button[type="submit"]').click()
      cy.contains("Successfully Saved").should("be.visible")

    })
  })