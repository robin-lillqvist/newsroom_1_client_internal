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

  it("create an article successfully", () => {
    cy.get("#new-article-form").within(() => {
      cy.get("#title").type("This is a title");
      cy.get("#lead").type("This is a lead");
      cy.get("textarea#content").type("This is some awesome content");
      cy.get("div[name='category']").click();
      cy.get('div[role="option"]')
        .contains("Tech")
        .click();
      cy.get('#imageUpload').click()
      
      // return Cypress.Blob.imgSrcToDataURL('./fixtures/IMG_0745.jpg').then((dataUrl) => {
      //   const img = Cypress.$('<img />', { src: dataUrl })
      
      //   cy.get('.utility-blob').then(($div) => {
      //     // append the image
      //     $div.append(img)
      //   })
      //   cy.get('.utility-blob img').click().should('have.attr', 'src', dataUrl)
      // })
      
      //   .fixture('IMG_0745.jpg').as('berlingo');
      // cy.get('input[type=file]').then(function($input) {
      //   return Cypress.Blob.base64StringToBlob(this.berlingo, 'image/jpg')
      //   .then((blob)) => {
      //     $input.fileupload('add', { files: blob})
      //   }
      // }
      
        
        
    });
    cy.get("#create-article-button").click();
    
    cy.get("#message").should(
      "contain",
      "Your article was successfully created"
    );
  });
});
