/* eslint-disable no-console */
/* eslint-disable camelcase */
import axios from "axios"
import { DELETE_NEWSLETTER_REQUEST, GET_NEWSLETTER_REQUEST, POST_NEWSLETTER, saveNewsletterRequest } from "../actions/newsletter";

const API_URL = process.env.REACT_APP_API_URL;

const newsletterAPI = (store) => (next) => (action) => {
  const { formFields : { nameRequest, emailRequest, idSelected} }= store.getState();
  const userRole = localStorage.getItem('userRole')
    switch (action.type) {
      case POST_NEWSLETTER:
        axios
        .post(`${API_URL}/newsletter`,
        { nameRequest,
         emailRequest,
        }
         )
        .then((response) => {
          console.log(response.data)
        })

        .catch((error) => console.log(error))
      next(action);
      break;
      case GET_NEWSLETTER_REQUEST:
        axios
        .get(`${API_URL}/admin/newsletter`, {
          headers : {role: userRole}
        })
        .then((response) => {
          store.dispatch(saveNewsletterRequest(response.data));
          console.log(response.data)
        })

        .catch((error) => console.log(error))
      next(action);
      break;
      case DELETE_NEWSLETTER_REQUEST: 
      axios
      .delete(`${API_URL}/admin/removerequest/${idSelected}`, {
        headers : { role: `${userRole}` }
      })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => console.log(error))
      next(action);
      break;
      default:
        next(action);
      }
    }
  export default newsletterAPI;

  