export const GET_TEACHERS = 'GET_TEACHERS';

export function getTeachers() {
  return {
    type: GET_TEACHERS,
  };
}

export const SAVE_TEACHERS = 'SAVE_TEACHERS';

export function saveTeachers(data) {
  return {
    type: SAVE_TEACHERS,
    payload: { data },
  };
}