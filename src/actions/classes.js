export const GET_CLASSES = 'GET_CLASSES';

export function getClasses() {
  return {
    type: GET_CLASSES,
  };
}

export const SAVE_CLASSES = 'SAVE_CLASSES';

export function saveClasses(data) {
  return {
    type: SAVE_CLASSES,
    payload: { data },
  };
}
export const POST_BOOKING = 'POST_BOOKING';

export function postBooking() {
  return {
    type: POST_BOOKING,
  };
}
export const GET_CLASS_REQUEST = 'GET_CLASS_REQUEST';

export function getClassRequest() {
  return {
    type: GET_CLASS_REQUEST,
  };
}
export const SAVE_CLASS_REQUEST = 'SAVE_CLASS_REQUEST';

export function saveClassRequest(data) {
  return {
    type: SAVE_CLASS_REQUEST,
    payload: { data },
  };
}
export const DELETE_CLASS_REQUEST = 'DELETE_CLASS_REQUEST';

export function deleteClassRequest() {
  return {
    type: DELETE_CLASS_REQUEST,
  };
}