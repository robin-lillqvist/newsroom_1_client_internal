import React from "react";

const CreateArticle = () => {
  return (
    <>
      <form id="new-article-form">
        Title <input id="title" placeholder="title" />
        Lead
        <input id="lead" placeholder="lead" />
        Content
        <textarea id="content" placeholder="content" />
        <select id="category-selector">
          <option value="latest_news">Latest News</option>
          <option value="tech">Tech</option>
          <option value="food">Food</option>
          <option value="sports">Sports</option>
          <option value="culture">Culture</option>
        </select>
        <button id="create-article-button">Create Article</button>
      </form>
    </>
  );
};

export default CreateArticle;
