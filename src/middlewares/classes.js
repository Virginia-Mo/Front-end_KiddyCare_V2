/* eslint-disable no-console */
import axios from "axios"
import { saveClasses, GET_CLASSES, POST_BOOKING, GET_CLASS_REQUEST, saveClassRequest, DELETE_CLASS_REQUEST } from "../actions/classes"
import { getMessageApi } from "../actions/message";

const API_URL = process.env.REACT_APP_API_URL;

const classesAPI = (store) => (next) => (action) => {
    const { formFields : { name, email, classBook, idSelected }} = store.getState();
    const classBooked = parseInt(classBook,10)
    const userRole = localStorage.getItem('userRole')
    switch (action.type) {
      case GET_CLASSES:
        axios
        .get(`${API_URL}/classes`)
        .then((response) => {
          store.dispatch(saveClasses(response.data));
        })
        .catch((error) => new Error(error))
      next(action);
      break;
      case POST_BOOKING:
        axios
        .post(`${API_URL}/bookingclass`,
        { name,
         email,
         classBooked
        }
         )
        .then((response) => {
          store.dispatch(getMessageApi(response.data))
        })
        .catch((error) => new Error(error))
      next(action);
      break
      case GET_CLASS_REQUEST:
        axios
        .get(`${API_URL}/admin/bookingclass`, {
          headers : {role: userRole}
        })
        .then((response) => {
          store.dispatch(saveClassRequest(response.data));
        })
        .catch((error) => new Error(error))
      next(action);
      break;
      case DELETE_CLASS_REQUEST: 
      axios
      .delete(`${API_URL}/admin/removebooking/${idSelected}`, {
        headers : { role: `${userRole}` }
      })
      .then((response) => {
        response.json("Deleted")
      })
      .catch((error) => new Error(error))
      next(action);
      break;
     default:
        next(action);
      }
    }
  export default classesAPI;

  