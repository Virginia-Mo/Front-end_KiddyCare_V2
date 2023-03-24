import { createStore, applyMiddleware, compose} from 'redux';

import reducer from '../reducers';
import classesAPI from '../middlewares/classes';
import testimonialAPI from '../middlewares/testimonial';
import teachersSAPI from '../middlewares/teachers';
import galleryAPI from '../middlewares/gallery';
import articlesAPI from '../middlewares/articles';
import tagsAPI from '../middlewares/tags';
import commentsAPI from '../middlewares/comments';
import newsletterAPI from '../middlewares/newsletter';
import messageAPI from '../middlewares/message';
import loginAPI from '../middlewares/login';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(classesAPI,
    testimonialAPI,
    teachersSAPI,
    galleryAPI,
    articlesAPI,
    tagsAPI,
    commentsAPI,
    newsletterAPI,
    messageAPI,
    loginAPI,),
);

const store = createStore(reducer, enhancers);

export default store;
