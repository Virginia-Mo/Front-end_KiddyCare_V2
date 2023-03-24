import {
  SAVE_ARTICLES,
  SAVE_SINGLE_ARTICLE
} from "../actions/articles";

const initialState = {
  articles: "",
  singleArticle: ""
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
    case SAVE_SINGLE_ARTICLE:
      return {
        ...state,
        singleArticle: payload.data,
        }
      default:
        return state;
  }
}

export default articlesReducer;