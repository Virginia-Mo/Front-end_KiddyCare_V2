import { SAVE_USER } from "../actions/login";

const initialState = {
  userName : "",
  userEmail : ""
};

function loginReducer(state = initialState, action = {}) {
const {type, payload } = action
  switch (type) {
    case SAVE_USER: 
    return {
        ...state,
        userName: payload.data.name,
        userEmail : payload.data.email
      }
    default:
      return state;
  }
}

export default loginReducer;
