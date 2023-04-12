import axios from "axios"
import { saveTeachers, GET_TEACHERS } from "../actions/teachers"

const API_URL = process.env.REACT_APP_API_URL;

const teachersSAPI = (store) => (next) => (action) => {
    switch (action.type) {
      case GET_TEACHERS:
        axios
        .get(`${API_URL}/teachers`)
        .then((response) => {
          store.dispatch(saveTeachers(response.data));
        })
        .catch((error) => new Error(error))
      next(action);
      break;
      default:
        next(action);
      }
    }
  export default teachersSAPI;

  