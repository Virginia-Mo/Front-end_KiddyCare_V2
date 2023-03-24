export const POST_MESSAGE = 'POST_MESSAGE';

export function postMessage() {
  return {
    type: POST_MESSAGE,
  };
}
export const GET__MESSAGE = 'GET__MESSAGE';

export function getMessage() {
  return {
    type: GET__MESSAGE,
  };
}
export const SAVE__MESSAGE = 'SAVE__MESSAGE';

export function saveMessage(data) {
  return {
    type: SAVE__MESSAGE,
    payload: { data },
  };
}
export const DELETE__MESSAGE = 'DELETE__MESSAGE';

export function deleteMessage() {
  return {
    type: DELETE__MESSAGE,
  };
}
