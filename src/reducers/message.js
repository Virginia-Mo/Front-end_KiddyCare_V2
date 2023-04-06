import { SAVE__MESSAGE, GET_MESSAGE_API, ERASE_MESSAGE_API } from "../actions/message";

const initialState = {
  message : "",
  messageApi : "",
};

function messageReducer(state = initialState, action = {}) {
const {type, payload } = action
  switch (type) {
      case SAVE__MESSAGE : 
      return {
          ...state,
          message : payload.data
      }
      case GET_MESSAGE_API : 
      return {
          ...state,
          messageApi : payload.data
      }
      case ERASE_MESSAGE_API : 
      return {
        ...state,
        messageApi : ""
      }
    default:
      return state;
  }
}

export default messageReducer;
