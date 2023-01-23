import {
  SAVE_ARTICLES
} from "../actions/articles";

const initialState = {
  articles: ""
};

function articlesReducer(state = initialState, action = {}) {
  const {
    type,
    payload
  } = action
  switch (type) {
    case SAVE_ARTICLES:
      return {
        ...state,
        articles: payload.data
      }
      default:
        return state;
  }
}

export default articlesReducer;