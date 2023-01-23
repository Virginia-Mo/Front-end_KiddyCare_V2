export const GET_GALLERY = 'GET_GALLERY';

export function getGallery() {
  return {
    type: GET_GALLERY,
  };
}

export const SAVE_GALLERY = 'SAVE_GALLERY';

export function saveGallery(data) {
  return {
    type: SAVE_GALLERY,
    payload: { data },
  };
}
export const SAVE_FILTERED_GALLERY = 'SAVE_FILTERED_GALLERY';

export function saveNewGallery(data) {
  return {
    type: SAVE_FILTERED_GALLERY,
    payload: { data },
  };
}