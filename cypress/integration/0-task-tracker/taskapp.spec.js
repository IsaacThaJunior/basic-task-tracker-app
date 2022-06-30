describe('Task tracker', () => {
	it('loads successfully', () => {
        cy.visit('http://localhost:3000');
        /* ==== Generated with Cypress Studio ==== */

        // Click on the h3 element
        cy.get(':nth-child(2) > h3').click();
        
        cy.get(':nth-child(1) > input').type('add a test');

        // Logs the string to the console in order to show Cypress Asychronous behavior
        console.log('Cypress is Asychronous');

        // Click on the button element
        cy.get(':nth-child(1) > button').click();

    });
});
