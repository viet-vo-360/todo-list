describe('My First Test', () => {
  it('CY Logging', () => {
    cy.visit('/');
    cy.log('Visit Finish');
    cy.log('**Complete** *Task* [here](google.com)').get('[data-testid=todo]').should('contain', 'Add TODO item')
    cy.get('[data-testid=todo]').should('contain', 'Add TODO item').log('**Complete** *Task* [here](google.com)')
  });
});
