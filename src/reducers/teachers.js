import {
  SAVE_TEACHERS
} from "../actions/teachers";

const initialState = {
  teachers: ""
};

function teachersReducer(state = initialState, action = {}) {
  const {
    type,
    payload
  } = action
  switch (type) {
    case SAVE_TEACHERS:
      return {
        ...state,
        teachers: payload.data
      }
      default:
        return state;
  }
}

export default teachersReducer;