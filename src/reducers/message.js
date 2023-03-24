import { SAVE__MESSAGE } from "../actions/message";

const initialState = {
  message : ""
};

function messageReducer(state = initialState, action = {}) {
const {type, payload } = action
  switch (type) {
      case SAVE__MESSAGE : 
      return {
          ...state,
          message : payload.data
      }
    default:
      return state;
  }
}

export default messageReducer;
