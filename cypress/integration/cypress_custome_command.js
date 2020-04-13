describe('Add todo task', () => {
  it('adding new successfuly', () => {
    cy.visit('/');
    cy.addTask({
      name: 'Research cypress',
      date: '2020-04-28',
      category: 'Work',
      isImportant: true,
    });
    cy.get('.ant-table-row').last().as('newTask');
    cy.get('@newTask').should('have.css', 'background-color', 'rgb(255, 255, 224)');
    cy.get('@newTask').should('contain', 'Research cypress');
    cy.get('@newTask').should('contain', '2020-04-28');
    cy.get('@newTask').should('contain', 'Work');
  });
});
