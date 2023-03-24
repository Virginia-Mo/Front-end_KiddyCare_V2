import { CHANGE_INPUT_VALUE, SAVE__ID } from "../actions/formFields";

export const initialState = {
    name : "",
    email : "",
    comment : "",
    namecomment: "",
    emailcomment: "",
    comment__message: "",
    nameRequest : "",
    emailRequest : "",
    classBook : "",
    subject : "",
    contact__message : "",
    password : "",
    idSeleted : "",
    tag: "",
    maintitle: "",
    mainimg: "",
    introduction: "",
    img1: "",
    title1: "",
    description1: "",
    title2: "",
    img2: "",
    description2: "",
    photo: "",
    job: "",
}

const formFieldsReducer = (state = initialState, action = {}) => {
    const { type, payload } = action; 
  
    switch (type) {
      case CHANGE_INPUT_VALUE:
        return {
          ...state,
          [payload.key]: payload.value,
        };

      case SAVE__ID:
        return {
        ...state,
        idSelected: payload.id
      }
      default:
            return state;
        }
}
export default formFieldsReducer;