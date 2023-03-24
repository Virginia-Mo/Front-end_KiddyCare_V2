import {
  SAVE_ARTICLES_BY_TAGS,
  SAVE_TAGS
} from "../actions/tags";

const initialState = {
  tags: "",
  articlesByTags : ""
};

function tagsReducer(state = initialState, action = {}) {
  const {
    type,
    payload
  } = action
  switch (type) {
    case SAVE_TAGS:
      return {
        ...state,
        tags: payload.data
      };
    case SAVE_ARTICLES_BY_TAGS:
        return {
          ...state,
          articlesByTags: payload.data
        }
      default:
       return state
      }
}

export default tagsReducer;