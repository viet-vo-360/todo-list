describe('Cypress screenshot', () => {
  it('Load page successfully', () => {
    cy.visit('/');
    cy.screenshot('Load TODO app UI');
    //cy.get('.ant-table').screenshot();
    //cy.screenshot({ x: 20, y: 20, width: 400, height: 300 });
  });

  it('TODO app UI should match snapshot', () => {
    cy.visit('/');
    cy.matchImageSnapshot('TODO app UI');
  });

  it('Button Add TODO task should as snapshot', () => {
    cy.visit('/');
    cy.get('#btn-add-task').matchImageSnapshot('Button Add TODO');
  });
});
