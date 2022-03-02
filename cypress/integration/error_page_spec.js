describe('The 404 Page', () => {
    it('successfully loads', () => {
        cy.visit('/404.html')
        cy.url().should('include', '/404')
        cy.get('[data-cy=not-found-text]').contains('Not found.')
    })

    it('links back to index', () => {
        cy.get('[data-cy=return-link]').contains('return').click()
        cy.url().should('include', 'index')
    })
})