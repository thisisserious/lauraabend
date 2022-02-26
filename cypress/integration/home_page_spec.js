describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/')
    })

    it('displays a header', () => {
      cy.get('[data-cy=main-header]').contains('I am a developer.')
    })

    it('displays the current year', () => {
      cy.get('[data-cy=current-year]').contains(new Date().getFullYear())
    })

    describe('dark mode toggle', () => {
      const dmOff = 'Dark mode is off';
      const dmOn = 'Dark mode is on';
      const lightStyling = 'rgb(255, 255, 255)';
      const darkStyling = 'rgb(51, 51, 51)';

      it('updates the background & font color', () => {
        cy.get('[data-cy=all-content]').should('have.css', 'background-color', lightStyling)
        cy.get('[data-cy=all-content]').should('have.css', 'color', darkStyling)
        cy.get('[data-cy=dark-mode-toggle]').click()
        cy.get('[data-cy=all-content]').should('have.css', 'background-color', darkStyling)
        cy.get('[data-cy=all-content]').should('have.css', 'color', lightStyling)
        cy.get('[data-cy=dark-mode-toggle]').click()
      })
      
      it('updates dark mode text', () => {
        cy.get('[data-cy=dark-mode-text]').contains(dmOff)
        cy.get('[data-cy=dark-mode-toggle]').click()
        cy.get('[data-cy=dark-mode-text]').contains(dmOn)
        cy.get('[data-cy=all-content]').should('have.css', 'background-color', darkStyling)
        cy.get('[data-cy=dark-mode-toggle]').click()
        cy.get('[data-cy=dark-mode-text]').contains(dmOff)
        cy.get('[data-cy=all-content]').should('have.css', 'background-color', lightStyling)
      })
    })
  })