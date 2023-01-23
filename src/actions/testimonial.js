export const GET_TESTIMONIAL = 'GET_TESTIMONIAL';

export function getTestimonial() {
  return {
    type: GET_TESTIMONIAL,
  };
}

export const SAVE_TESTIMONIAL = 'SAVE_TESTIMONIAL';

export function saveTestimonial(data) {
  return {
    type: SAVE_TESTIMONIAL,
    payload: { data },
  };
}