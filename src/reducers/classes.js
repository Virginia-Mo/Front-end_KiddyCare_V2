import {
  SAVE_CLASSES, SAVE_CLASS_REQUEST
} from "../actions/classes";

const initialState = {
  classes: "",
  classRequest : ""
};

function classesReducer(state = initialState, action = {}) {
  const {
    type,
    payload
  } = action
  switch (type) {
    case SAVE_CLASSES:
      return {
        ...state,
        classes: payload.data
      }
    case SAVE_CLASS_REQUEST: 
    return {
      ...state,
      classRequest : payload.data
    }
      default:
        return state;
  }
  
}

export default classesReducer;