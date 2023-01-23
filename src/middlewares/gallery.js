import axios from "axios"
import { saveGallery, GET_GALLERY } from "../actions/gallery"

const API_URL = process.env.REACT_APP_API_URL;

const galleryAPI = (store) => (next) => (action) => {
    switch (action.type) {
      case GET_GALLERY:
        axios
        .get(`${API_URL}/gallery`)
        .then((response) => {
          store.dispatch(saveGallery(response.data));
          console.log(response.data)
        })
        // eslint-disable-next-line no-console
        .catch((error) => console.log(error))
      next(action);
      break;
      default:
        next(action);
      }
    }
  export default galleryAPI;

  