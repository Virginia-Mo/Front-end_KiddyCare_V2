export const GET_ARTICLES = 'GET_ARTICLES';

export function getArticles() {
  return {
    type: GET_ARTICLES,
  };
}

export const SAVE_ARTICLES = 'SAVE_ARTICLES';

export function saveArticles(data) {
  return {
    type: SAVE_ARTICLES,
    payload: { data },
  };
}
export const SAVE_SINGLE_ARTICLE = 'SAVE_SINGLE_ARTICLE';

export function saveSingleArticle(data) {
  return {
    type: SAVE_SINGLE_ARTICLE,
    payload: { data },
  };
}
export const DELETE_ARTICLE = 'DELETE_ARTICLE';

export function deleteArticle() {
  return {
    type: DELETE_ARTICLE
  };
}
export const CREATE_ARTICLE = 'CREATE_ARTICLE';

export function createArticle() {
  return {
    type: CREATE_ARTICLE,
  };
}
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';

export function updateArticle() {
  return {
    type: UPDATE_ARTICLE,
  };
}

