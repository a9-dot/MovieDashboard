// cypress/integration/movieDetails.spec.js
describe('Movie Details', () => {
    it('should navigate to movie details page', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[placeholder="Search movies"]').type('Inception');
      cy.get('button').contains('Search').click();
      cy.contains('Inception').click(); // Assuming the movie card is clickable
      cy.contains('A mind-bending thriller').should('be.visible'); // Adjust based on the movie's plot
    });
  
    it('should display movie not found message for invalid ID', () => {
      cy.visit('http://localhost:3000/movie/invalidID');
      cy.contains('Movie not found for ID: invalidID').should('be.visible');
    });
  });