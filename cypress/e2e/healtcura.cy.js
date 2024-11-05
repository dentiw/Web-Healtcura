describe("Login Feature", () => {
  it("User success Login", () => {
      // Step 1: Visit the website
      cy.visit("https://katalon-demo-cura.herokuapp.com");

      // Step 2: Click on the 'Make Appointment' button
      cy.get("#btn-make-appointment").click();
      cy.wait(1000);

      // Step 3: Fill in login credentials
      cy.get("#txt-username").type("John Doe");
      cy.get("#txt-password").type("ThisIsNotAPassword");
      
      // Step 4: Submit the login form
      cy.get("button[type='submit']").click();
      cy.wait(1000);

      // Step 5: Select a facility
      cy.get("#combo_facility").select("Tokyo CURA Healthcare Center");

      // Step 6: Check 'Apply for hospital readmission' checkbox
      cy.get("#chk_hospotal_readmission").check();

      // Step 7: Choose 'Medicare' as the healthcare program
      cy.get("#radio_program_medicare").check();

      // Step 8: Select the visit date
      cy.get("#txt_visit_date").type("12/12/2023");

      // Step 9: Fill in comments
      cy.get("#txt_comment").type("Looking forward to the appointment!");

      // Step 10: Click on 'Book Appointment' button
      cy.get("#btn-book-appointment").click();

      // Step 11: Verify the expected result
      // Check if the confirmation page displays "Appointment Confirmation"
      cy.get("h2").should("contain", "Appointment Confirmation");
  });
});

// id    : #login
// class : .login-button
// tag   : li & button
// attribute in tag : a[type=button], button[name='buttonLogin']
