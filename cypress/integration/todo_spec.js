describe("To do app", () => {
  it("can load the main page", () => {
    cy.visit("http://localhost:3000");
  });
  it("can see the heading", () => {
    cy.get(".chakra-heading").should("include.text", "Todo App this will fail");
  });
});
