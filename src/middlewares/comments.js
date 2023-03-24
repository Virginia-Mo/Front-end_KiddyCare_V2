/* eslint-disable camelcase */
import axios from "axios"
import { DELETE__COMMENT, GET__COMMENTS, POST_COMMENTS, saveComments } from "../actions/comments";

const API_URL = process.env.REACT_APP_API_URL;

const commentsAPI = (store) => (next) => (action) => {
 const { formFields : { name, email, message, idSelected }} = store.getState();
 const userRole = localStorage.getItem('userRole')
 const {articles : {singleArticle }} = store.getState();
   const {id} = singleArticle
    switch (action.type) {
      case POST_COMMENTS:
        axios
        .post(`${API_URL}/comments`,
        { name,
         email,
         message,
         id
        }
         )
        .then((response) => {
          console.log(response.data)
        })
        // eslint-disable-next-line no-console
        .catch((error) => console.log(error))
      next(action);
      break;
      case GET__COMMENTS:
      axios.get(`${API_URL}/admin/comments`, {
        headers : { role: `${userRole}` }
      })
      .then((response) => {
        store.dispatch(saveComments(response.data))
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error))
    next(action);
    break;
    case DELETE__COMMENT: 
    axios
    .delete(`${API_URL}/admin/removecomment/${idSelected}`, {
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
  export default commentsAPI;

  