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