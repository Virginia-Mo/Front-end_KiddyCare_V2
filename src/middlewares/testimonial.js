import axios from "axios"
import { saveTestimonial, GET_TESTIMONIAL } from "../actions/testimonial"

const API_URL = process.env.REACT_APP_API_URL;

const testimonialAPI = (store) => (next) => (action) => {
    switch (action.type) {
      case GET_TESTIMONIAL:
        axios
        .get(`${API_URL}/testimonials`)
        .then((response) => {
          store.dispatch(saveTestimonial(response.data));
        })
        // eslint-disable-next-line no-console
        .catch((error) => new Error(error))
      next(action);
      break;
      default:
        next(action);
      }
    }
  export default testimonialAPI;
