describe('Cypress screenshot', () => {
  it('Load page successfully', () => {
    cy.visit('/');
    cy.matchImageSnapshot('TODO app UI', );
    //cy.screenshot('Load TODO app UI', { blackout : ['#btn-add-task']});
  });

  // it('TODO app UI should match snapshot', () => {
  //   cy.visit('/');
  //   cy.matchImageSnapshot('TODO app UI');
  // });

  // it('Button Add TODO task should as snapshot', () => {
  //   cy.visit('/');
  //   cy.get('#btn-add-task').matchImageSnapshot('Button Add TODO');
  // });

    // it('Button Add TODO task should as snapshot', () => {
  //   cy.visit('/');
  //   cy.get('#btn-add-task').matchImageSnapshot('Button Add TODO');
  // });
});
