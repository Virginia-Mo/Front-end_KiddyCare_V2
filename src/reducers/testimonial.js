import {
    SAVE_TESTIMONIAL
  } from "../actions/testimonial";
  
  const initialState = {
    testimonial: ""
  };
  
  function testimonialReducer(state = initialState, action = {}) {
    const {
      type,
      payload
    } = action
    switch (type) {
      case SAVE_TESTIMONIAL:
        return {
          ...state,
          testimonial: payload.data
        }
        default:
          return state;
    }
  }
  
  export default testimonialReducer;