import initialState from "../store/initialState";
import * as actionTypes from "../actions/actionTypes";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_ARTICLE:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default rootReducer;
