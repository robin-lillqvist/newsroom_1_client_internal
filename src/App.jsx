import React from "react";
import { connect } from "react-redux";
import CreateArticle from "./components/CreateArticle";

const App = () => {
  return <CreateArticle />;
};

export default connect()(App);
