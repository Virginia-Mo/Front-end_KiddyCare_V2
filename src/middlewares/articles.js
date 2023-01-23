import axios from "axios"
import { saveArticles, GET_ARTICLES} from "../actions/articles"

const API_URL = process.env.REACT_APP_API_URL;

const articlesAPI = (store) => (next) => (action) => {
    switch (action.type) {
      case GET_ARTICLES:
        axios
        .get(`${API_URL}/pages`)
        .then((response) => {
          store.dispatch(saveArticles(response.data));
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
  export default articlesAPI;

  