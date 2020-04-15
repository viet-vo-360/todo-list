const nametask = require("../../fixtures/nametask.json");
const nametask1 = require("../../fixtures/nametask1.json");
describe('Add task with parameter get from fixture', ()=> {
    it('Add task', ()=> {
      cy.visit('/');
        cy.addtask(nametask.name, nametask.category, nametask.date, true);

        cy.addtask(nametask1.name,nametask1.category,nametask1.date,false);
    })
})

Cypress.on('uncaught:exception', (err) => {
    if (resizeObserverLoopErrRe.test(err.message)) {
      // returning false here prevents Cypress from
      // failing the test
      return false
    }
})