import { combineReducers } from 'redux';
import classesReducer from './classes';
import galleryReducer from './gallery';
import teachersReducer from './teachers';
import testimonialReducer from './testimonial';
import articlesReducer from './articles';

const rootReducer = combineReducers({
    classes: classesReducer,
    testimonial : testimonialReducer,
    teachers : teachersReducer,
    gallery : galleryReducer,
    articles : articlesReducer
  });
  
  export default rootReducer;