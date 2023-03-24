export const GET_TAGS = 'GET_TAGS';

export function getTags() {
  return {
    type: GET_TAGS,
  };
}

export const SAVE_TAGS = 'SAVE_TAGS';

export function saveTags(data) {
  return {
    type: SAVE_TAGS,
    payload: { data },
  };
}
export const SAVE_ARTICLES_BY_TAGS = 'SAVE_ARTICLES_BY_TAGS';

export function saveArticlesByTag(data) {
  return {
    type: SAVE_ARTICLES_BY_TAGS,
    payload: { data },
  };
}

