import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createArticle } from "../state/actions/articleActions";

const CreateArticle = props => {
  const onSubmitHandler = () => {
    props.createArticle();
  };
  return (
    <>
      <form id="new-article-form" onSubmit={onSubmitHandler}>
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
        <button id="create-article-button" type="submit">
          Create Article
        </button>
      </form>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    createArticle: bindActionCreators(createArticle, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(CreateArticle);
