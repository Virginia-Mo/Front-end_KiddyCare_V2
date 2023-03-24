import { SAVE__COMMENTS } from "../actions/comments";
  
  const initialState = {
    comments : ""
  };
  
  function commentsReducer(state = initialState, action = {}) {
    const {
      type,
      payload
    } = action
    switch (type) {
      case SAVE__COMMENTS: 
      return {
        ...state,
        comments : payload.data
      }
        default:
          return state;
    }
    
  }
  
  export default commentsReducer;