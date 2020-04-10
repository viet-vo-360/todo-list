describe('The first test', () => {
  it('Submit button should be disabled by default', () => {
    // Go to application
    cy.visit('/');

    cy.wait(1000);

    // Get submit button
    // Verify submit button is disabled or not
    cy.get('.ant-btn-block').should('be.disabled');
  });
})