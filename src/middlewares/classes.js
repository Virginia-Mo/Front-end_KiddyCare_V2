import axios from "axios"
import { saveClasses, GET_CLASSES } from "../actions/classes"

const API_URL = process.env.REACT_APP_API_URL;

const classesAPI = (store) => (next) => (action) => {
    switch (action.type) {
      case GET_CLASSES:
        axios
        .get(`${API_URL}/classes`)
        .then((response) => {
          store.dispatch(saveClasses(response.data));
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
  export default classesAPI;

  