/// <reference types="cypress"/>

describe("ehs admin", () => {
  it("should login ehs admin", () => {
    cy.visit("http://docker.ehso.ir/panel");
    // cy.get(".gLFyf").type("Hello world{enter}");
    cy.get("#email").type("admin@barakat.com");
    cy.get("#password").type("#admin#{enter}");
  });
});
