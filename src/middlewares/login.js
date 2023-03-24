/* eslint-disable camelcase */
import axios from "axios"
import { LOGIN, LOG_OUT} from "../actions/login";

const API_URL = process.env.REACT_APP_API_URL;

const loginAPI = (store) => (next) => (action) => {
 const { formFields : { email, password }} = store.getState();

    switch (action.type) {
      case LOG_OUT:
        axios
        .get(`${API_URL}/logout`)
        .then((response) => {
          localStorage.clear();
          window.location.href='/'
          console.log(response.data)
        })
        // eslint-disable-next-line no-console
        .catch((error) => console.log(error))
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
          console.log(response.data)
          localStorage.setItem('userRole', response.data.role);
          localStorage.setItem('userId', response.data.id);
          window.location.href = '/'
          
        })
        // eslint-disable-next-line no-console
        .catch((error) => console.log(error))
      next(action);
      break;
      
      default:
        next(action);
      }
    }
  export default loginAPI;

  