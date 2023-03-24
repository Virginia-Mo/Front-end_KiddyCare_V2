export const POST_COMMENTS = 'POST_COMMENTS';

export function postComments() {
  return {
    type: POST_COMMENTS,
  };
}
export const GET__COMMENTS = 'GET__COMMENTS';

export function getComments() {
  return {
    type: GET__COMMENTS,
  };
}
export const SAVE__COMMENTS = 'SAVE__COMMENTS';

export function saveComments(data) {
  return {
    type: SAVE__COMMENTS,
    payload: { data },
  };
}
export const DELETE__COMMENT = 'DELETE__COMMENT';

export function deleteComment(id) {
  return {
    type: DELETE__COMMENT,
    payload: { id },
  };
}

