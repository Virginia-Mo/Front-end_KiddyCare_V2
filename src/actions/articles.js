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
