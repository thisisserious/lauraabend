describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/')
    })

    it('displays a header', () => {
      cy.get('h1').contains('I am a developer.')
    })

    it('displays the current year', () => {
      cy.get('.year').contains(new Date().getFullYear())
    })

    describe('dark mode toggle', () => {
      it('updates the background & font color', () => {
        cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get('body').should('have.css', 'color', 'rgb(51, 51, 51)')
        cy.get('.slider').click()
        cy.get('body').should('have.css', 'background-color', 'rgb(51, 51, 51)')
        cy.get('body').should('have.css', 'color', 'rgb(255, 255, 255)')
        cy.get('.slider').click()
      })
      
      it('updates dark mode text', () => {
        cy.get('.dark-mode-status').contains('Dark mode is off')
        cy.get('.slider').click()
        cy.get('.dark-mode-status').contains('Dark mode is on')
        cy.get('body').should('have.css', 'background-color', 'rgb(51, 51, 51)')
        cy.get('.slider').click()
        cy.get('.dark-mode-status').contains('Dark mode is off')
        cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
      })
    })
  })