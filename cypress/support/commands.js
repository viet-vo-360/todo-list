//mport { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/commands';
//addMatchImageSnapshotCommand();

import {
    nameTask,
    categoryTask,
    dataTask,
    checkImportant,
    addToDoButton,
    deleteButton,
    completeButton,
    okDelete,
    cancelDelete,
    pageDisplay
} from '../shared/components';

Cypress.Commands.add('addtask', (name,category,date,isImportant) => {
    cy.get(nameTask).clear();
    cy.get(nameTask).type(name);
    cy.get(categoryTask).click();
    cy.get(categoryTask).type(category).type('{enter}');
    cy.get(dataTask).click();
    cy.get(dataTask).type(date).type('{enter}');
    if(isImportant == true) {
        cy.get(checkImportant).click();
    };
    cy.get(addToDoButton).click();
});

Cypress.Commands.add('clickButtonComplete', (rownumber) => {
    var row = rownumber -1;
    cy.get(completeButton).eq(row).click();
    }
);

Cypress.Commands.add('clickButtonDelete', (rownumber,confirm) => {
    var row = rownumber -1;
    cy.get(deleteButton).eq(row).click();
    if(confirm == true){
        cy.get(okDelete).click();
    }
    else
    cy.get(cancelDelete).click();
    }
);

Cypress.Commands.add('clickPageDisplay', (pageNumber) => {
    var number = pageNumber + (" / page");
    cy.get(pageDisplay).click().contains(number).click();
    }
);