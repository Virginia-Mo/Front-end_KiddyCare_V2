import { SAVE_NEWSLETTER_REQUEST } from "../actions/newsletter";
  
  const initialState = {
    newsletterRequest : ""
  };
  
  function newsletterReducer(state = initialState, action = {}) {
    const {
      type,
      payload
    } = action
    switch (type) {
     
      case SAVE_NEWSLETTER_REQUEST: 
      return {
        ...state,
        newsletterRequest : payload.data
      }
        default:
          return state;
    }
    
  }
  
  export default newsletterReducer;