/* eslint-disable no-console */
/* eslint-disable camelcase */
import axios from "axios"
import { GET__MESSAGE, POST_MESSAGE, saveMessage, DELETE__MESSAGE } from "../actions/message";

const API_URL = process.env.REACT_APP_API_URL;

const messageAPI = (store) => (next) => (action) => {
 const { formFields : { name, email, subject, contact__message, idSelected }} = store.getState();
 const userRole = localStorage.getItem('userRole')
    switch (action.type) {
      case POST_MESSAGE:
        axios
        .post(`${API_URL}/message`,
        { name,
         email,
         subject,
         contact__message,
        }
         )
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => console.log(error))
      next(action);
      break;
      case GET__MESSAGE:
        axios.get(`${API_URL}/admin/message`, {
          headers : { role: `${userRole}` }
        })
        .then((response) => {
          store.dispatch(saveMessage(response.data))
        })
        .catch((error) => console.log(error))
      next(action);
      break;
      case DELETE__MESSAGE: 
      axios
      .delete(`${API_URL}/admin/removemessage/${idSelected}`, {
        headers : { role: `${userRole}` }
      })
      .then((response) => {
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
  export default messageAPI;

  