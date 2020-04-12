describe('The first test', () => {

  beforeEach(() => {
    // Go to application
    cy.visit('/');

    cy.get('a[href*="#complete"]').eq(0).invoke('text').as('button1Text');

  });

  //it('Submit button should be disabled by default', () => {

  //  // declare variable
  //  //const buttonText = 'Add TODO';
  //  const buttonText = Cypress.env('buttonText1');

  //  // Get submit button
  //  // Verify submit button text
  //  cy.get('.ant-btn-block').eq(0).contains(buttonText);
  //});

  //it('Return values from Commands', () => {

  //  // Wait btn1 exist => verify btn2

  //  cy.get('@button1Text').then(($button1Text) => {
  //    cy.get('a[href*="#complete"]').eq(1).should(($btn2) => {

  //      expect($btn2.text()).eq($button1Text);

  //    })
  //  })
  //});

  //it('Return values from Commands 2', () => {

  //  // Wait btn1 exist => verify btn2
  //  cy.get('a[href*="#complete"]').eq(0).then(($btn1) => {

  //    cy.get('a[href*="#complete"]').eq(1).should(($btn2) => {
  //      expect($btn2.text()).eq(button1Text);
  //    })

  //  })
  //});

  it('The text of completed button should equal "Complete"', () => {
    cy.get('a[href*="#complete"]').eq(0).then(($btn1) => {
      var text = $btn1.text();

      // get button fixture
      cy.fixture('button.json').then(($buttonFixture) => {
        expect(text).eq($buttonFixture.buttonCompleteText);
      })

      
    })
  })
})