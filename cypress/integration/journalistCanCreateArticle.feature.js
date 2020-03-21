describe("Journalist can", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/articles/",
      response: "fixture:create_article_response.json"
    });
    cy.visit("/");
  });

  it("create an article successfully", () => {
    cy.get("#new-article-form");
    cy.get("input")
      .contains("title")
      .type("This is a title");
    cy.get("input")
      .contains("lead")
      .type("This is a lead");
    cy.get("input")
      .contains("content")
      .type("This is some awesome content");
    cy.get("#category-selector").select("Latest News");
    cy.get("#create-article-button").click();
    cy.get("#message").should(
      "contain",
      "Your article was successfully created"
    );
  });
});
