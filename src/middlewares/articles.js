/* eslint-disable camelcase */
import axios from "axios"
import { saveArticles, GET_ARTICLES, DELETE_ARTICLE, CREATE_ARTICLE, UPDATE_ARTICLE} from "../actions/articles"

const API_URL = process.env.REACT_APP_API_URL;

const articlesAPI = (store) => (next) => (action) => {
  const { formFields : { 
    maintitle,
    main_img,
    introduction,
    img1,
    title1,
    description1,
    title2,
    img2,
    description2,
    tag,
    author_img,
    job,
    name,
    idSelected }} = store.getState();
  const { articles : { singleArticle : { id }}} = store.getState()
  
  const userRole = localStorage.getItem('userRole')
  const userId = localStorage.getItem('userId')
    switch (action.type) {
      case GET_ARTICLES:
        axios
        .get(`${API_URL}/articles`)
        .then((response) => {
          store.dispatch(saveArticles(response.data));
        })
        .catch((error) => console.log(error))
      next(action);
      break;
      case DELETE_ARTICLE: 
      axios
      .delete(`${API_URL}/admin/removearticle/${idSelected}`, {
      headers : { role: `${userRole}` }
      })
      .then((response) => {
      console.log(response.data)
      })
      .catch((error) => console.log(error))
    break;
    case CREATE_ARTICLE:
        axios
        .post(`${API_URL}/admin/createarticle`, {
            maintitle,
            main_img,
            introduction,
            title1,
            img1,
            description1,
            title2,
            img2,
            description2,
            author_img,
            authorname: name,
            authorjob: job,
            tag,
            user_id : userId
            },{
          headers : {
            role: `${userRole}`,
            id: `${userId}` 
          },
        })
        .then((response) => {
          store.dispatch(saveArticles(response.data));
        })
        .catch((error) => console.log(error))
      next(action);
      break;
      case UPDATE_ARTICLE:
        axios
        .patch(`${API_URL}/admin/updatearticle/${id}`, {
            maintitle,
            main_img,
            introduction,
            title1,
            img1,
            description1,
            title2,
            img2,
            description2,
            author_img,
            authorname: name,
            authorjob: job,
            tag_id: tag,
            user_id : userId
            },{
          headers : {
            role: `${userRole}`,
            id: `${userId}` 
          },
        })
        .then((response) => {
          response.json(response.data)
        })
        .catch((error) => console.log(error))
      next(action);
      break;
      default:
        next(action);
      }
    }
  export default articlesAPI;

  