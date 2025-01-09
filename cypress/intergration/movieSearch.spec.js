// cypress/integration/movieSearch.spec.js
describe('Movie Search', () => {
    it('should search for movies and display results', () => {
      cy.visit('http://localhost:3000'); // Adjust the URL based on your app's running address
      cy.get('input[placeholder="Search movies"]').type('Inception');
      cy.get('button').contains('Search').click();
      cy.contains('Inception').should('be.visible');
    });
  
    it('should display no results found message', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[placeholder="Search movies"]').type('Nonexistent Movie');
      cy.get('button').contains('Search').click();
      cy.contains('No movies found for "Nonexistent Movie".').should('be.visible');
    });
  });