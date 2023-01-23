import {
  SAVE_CLASSES
} from "../actions/classes";

const initialState = {
  classes: ""
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
      default:
        return state;
  }
}

export default classesReducer;