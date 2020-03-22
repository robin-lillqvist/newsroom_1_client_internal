describe("Journalist can", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/articles",
      response: "fixture:create_article_response.json"
    });
    cy.visit("/");
  });

  // cy.get("input#search-field").type('Vertigo');
  it("create an article successfully", () => {
    cy.get("#new-article-form").within(() => {
      cy.get("#title").type("This is a title");
      cy.get("#lead").type("This is a lead");
      cy.get("textarea#content").type("This is some awesome content");
      cy.get("div[name='category']").click();
      cy.get('div[role="option"]').contains('Tech').click()
      // cy.select("div.text").should("contain", "Latest News");

      cy.get("#create-article-button").click();
    });
    cy.get("#message").should(
      "contain",
      "Your article was successfully created"
    );
  });
});
