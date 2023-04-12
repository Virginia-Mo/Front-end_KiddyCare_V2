/* eslint-disable camelcase */
import axios from "axios"
import { LOGIN, LOG_OUT} from "../actions/login";
import { getMessageApi } from "../actions/message";

const API_URL = process.env.REACT_APP_API_URL;

const loginAPI = (store) => (next) => (action) => {
 const { formFields : { email, password }} = store.getState();

    switch (action.type) {
      case LOG_OUT:
        axios
        .get(`${API_URL}/logout`)
        .then(() => {
          localStorage.clear();
          window.location.href='/'
        })
        .catch((error) => new Error(error))
      break;
      case LOGIN:
        axios
        .post(`${API_URL}/login`,
        {
         email,
          password
        }
         )
        .then((response) => {
          localStorage.setItem('userRole', response.data.role);
          localStorage.setItem('userId', response.data.id);
          window.location.href = '/'
        })
        .catch((error) => {
      store.dispatch(getMessageApi(error.response.data))})
      next(action);
      break;
      
      default:
        next(action);
      }
    }
  export default loginAPI;

  