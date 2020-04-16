describe('Add task with parameter get from fixture', ()=> {
    it.only('Add task complete task then delete task', ()=> {
        cy.visit('/');
        cy.fixture('nametask.json').then($task =>{
            cy.addtask($task.name,$task.category,$task.date,true);
        });
        cy.fixture('nametask1.json').then(($task1) =>{
            cy.addtask($task1.name,$task1.category,$task1.date,true);
        });
        cy.fixture('nametask1.json').then(($task1) =>{
            cy.addtask($task1.namesecond,$task1.categorysecond,$task1.datesecond,true);
        });
        cy.fixture('nametask1.json').then(($task1) =>{
            cy.addtask($task1.namethird,$task1.categorythird,$task1.datethird,true);
        });
        cy.clickButtonComplete(2);
        cy.clickButtonComplete(4);
        cy.clickButtonDelete(4,true);
        cy.clickButtonDelete(1,false);
    });
     
})

Cypress.on('uncaught:exception', (err) => {
    if (resizeObserverLoopErrRe.test(err.message)) {
      // returning false here prevents Cypress from
      // failing the test
      return false
    }
})