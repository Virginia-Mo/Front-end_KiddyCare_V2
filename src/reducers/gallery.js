import {
  SAVE_GALLERY,SAVE_FILTERED_GALLERY
} from "../actions/gallery";

const initialState = {
  gallery: "",
  filteredGallery : ""
};

function galleryReducer(state = initialState, action = {}) {
  const {
    type,
    payload
  } = action
  switch (type) {
    case SAVE_GALLERY:
      return {
        ...state,
        gallery: payload.data
      }
    case SAVE_FILTERED_GALLERY:
        return {
          ...state,
          filteredGallery: payload.data
        }
      default:
        return state;
  }
}

export default galleryReducer;