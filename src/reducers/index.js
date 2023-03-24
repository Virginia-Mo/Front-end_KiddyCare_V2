import { combineReducers } from 'redux';
import classesReducer from './classes';
import galleryReducer from './gallery';
import teachersReducer from './teachers';
import testimonialReducer from './testimonial';
import articlesReducer from './articles';
import tagsReducer from './tags';
import formFieldsReducer from './formFields';
import loginReducer from './login';
import messageReducer from './message';
import newsletterReducer from './newsletter';
import commentsReducer from './comments';

const rootReducer = combineReducers({
    classes: classesReducer,
    testimonial : testimonialReducer,
    teachers : teachersReducer,
    gallery : galleryReducer,
    articles : articlesReducer,
    tags : tagsReducer,
    formFields : formFieldsReducer,
    user : loginReducer,
    message : messageReducer,
    newsletter : newsletterReducer,
    comments : commentsReducer
  });
  
  export default rootReducer;