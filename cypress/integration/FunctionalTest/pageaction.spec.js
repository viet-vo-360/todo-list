describe('Verify some actions on page' ,() => {
    it('Click on the Complete button at second row and check the colored underlines and strikethrough', () => {
        cy.visit('/');
        
    });

    it('Verify the error message displays if input value less than 5 characters', () => {
        cy.get('.ant-form-item').get('.ant-input').type('ford');
        cy.get('.ant-typography-danger').should('have.text', 'Length must be more than 5');
        cy.get('.ant-typography-danger').should('have.css','color','rgb(255, 77, 79)');
    });

    it('Verify new row is added into table', () => {
        cy.get('.ant-form-item').get('.ant-input').clear();
        cy.get('.ant-form-item').get('.ant-input').type('Practice second lesson');  
        cy.get('#task-category').click();
        cy.get('#task-category').type('Work').type('{enter}');
        cy.get('input[placeholder="Select date"]').click();
        cy.get('input[placeholder="Select date"]').type('2020-04-11').type('{enter}');
        cy.get('.ant-btn-block').should('not.be.disabled');
        cy.get('.ant-btn-block').click();
       
    })
})

Cypress.on('uncaught:exception', (err) => {
    if (resizeObserverLoopErrRe.test(err.message)) {
      // returning false here prevents Cypress from
      // failing the test
      return false
    }
})