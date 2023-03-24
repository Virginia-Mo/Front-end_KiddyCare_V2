export const POST_NEWSLETTER = 'POST_NEWSLETTER';

export function postNewsletter() {
  return {
    type: POST_NEWSLETTER,
  };
}
export const GET_NEWSLETTER_REQUEST = 'GET_NEWSLETTER_REQUEST';

export function getNewsletterRequest() {
  return {
    type: GET_NEWSLETTER_REQUEST,
  };
}

export const SAVE_NEWSLETTER_REQUEST = 'SAVE_NEWSLETTER_REQUEST';

export function saveNewsletterRequest(data) {
  return {
    type: SAVE_NEWSLETTER_REQUEST,
    payload: { data },
  };
}
export const DELETE_NEWSLETTER_REQUEST = 'DELETE_NEWSLETTER_REQUEST';

export function deleteNewsletterRequest() {
  return {
    type: DELETE_NEWSLETTER_REQUEST,
  };
}
