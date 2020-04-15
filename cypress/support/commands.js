/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Cypress.Commands.add('visitWithDelWinFetch', (path, opts = {}) => {
//   cy.visit(
//       path,
//       Object.assign(opts, {
//           onBeforeLoad(win) {
//               delete win.fetch;
//           },
//       })
//   );
// });
Cypress.Commands.add('addtask', (name,category,date,isImportant) => {
    cy.get('.ant-form-item-control-input').find('#task-tilte').type(name);
    cy.get('#task-category').click();
    cy.get('#task-category').type(category).type('{enter}');
    cy.get('input[placeholder="Select date"]').click();
    cy.get('input[placeholder="Select date"]').type(date).type('{enter}');
    if(isImportant == true) {
        cy.get('#checkbox-important-task').click();
    };
    cy.get('.ant-btn-block').click();

    cy.get('.ant-form-item-control-input').find('#task-tilte').clear();

})