import axios from "axios";
import { CREATE_NEW_ARTICLE } from "./actionTypes";

const createArticle = () => {
  return async dispatch => {
    let response = await axios.post("/articles");
    return dispatch(dispatchArticleAction(response.data));
  };
};

const dispatchArticleAction = json => {
  return { type: CREATE_NEW_ARTICLE, payload: json };
};

export { createArticle };
