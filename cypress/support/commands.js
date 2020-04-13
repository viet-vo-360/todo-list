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

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
addMatchImageSnapshotCommand();

const resizeObserverLoopErrRe = /^ResizeObserver loop limit exceeded/;

Cypress.on('uncaught:exception', (err) => {
  if (resizeObserverLoopErrRe.test(err.message)) {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  }
});

Cypress.Commands.add('addTask', ({ name, date, category, isImportant }) => {
  cy.get('#task-tilte').type(name);
  cy.get('.ant-picker-input > input').click().type(date);
  cy.get('#task-category').click().type(category).type('{enter}');
  if (isImportant) {
    cy.get('.ant-checkbox-input').check();
  }
  cy.get('#btn-add-task').click();
});
