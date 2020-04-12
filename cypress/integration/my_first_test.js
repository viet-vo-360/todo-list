describe('My First Test', () => {
  it('Do something', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions');
    cy.get('.well > .btn-danger').click()
  });
});
