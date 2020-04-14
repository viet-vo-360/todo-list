describe('Cypress logging', () => {
  // it('Todolist UI should have add todo button', () => {
  //   cy.visit('/');
  //   cy.log('Visit Finish');
  //   cy.log('**Complete** *Task* [here](google.com)').get('.ant-typography').should('contain', 'Add TODO item');
  //   cy.get('#btn-add-task').should('exist');
  // });
  it('screenbshot full page', () => {
    cy.visit('https://docs.cypress.io/api/commands/screenshot.html#Syntax');
    cy.get('#article').screenshot('article_image', {capture : "viewport"});
  });

  // it('demo click logging', () => {
  //   cy.visit('https://docs.cypress.io/examples/examples/recipes.html#Fundamentals');
  //   cy.get('[data-target="sidebar-li-examples"] > .sidebar-links > :nth-child(4) > .sidebar-link').click()
  // });
});
