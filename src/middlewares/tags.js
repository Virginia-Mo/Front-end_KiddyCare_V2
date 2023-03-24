import axios from "axios"
import { saveTags, GET_TAGS} from "../actions/tags"

const API_URL = process.env.REACT_APP_API_URL;

const tagsAPI = (store) => (next) => (action) => {
  
    switch (action.type) {
      case GET_TAGS:
        axios
        .get(`${API_URL}/tags`)
        .then((response) => {
          store.dispatch(saveTags(response.data));
        })
        // eslint-disable-next-line no-console
        .catch((error) => console.log(error))
      next(action);
      break;
      default:
        next(action);
      }
    }
export default tagsAPI;

