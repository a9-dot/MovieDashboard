// cypress/integration/apiFailure.spec.js
describe('API Failure', () => {
    it('should display an error message on API failure', () => {
      cy.intercept('GET', '**/api?*', { statusCode: 500 }).as('getMovies');
      cy.visit('http://localhost:3000');
      cy.get('input[placeholder="Search movies"]').type('Inception');
      cy.get('button').contains('Search').click();
      cy.wait('@getMovies');
      cy.contains('Something went wrong:').should('be.visible');
    });
  });