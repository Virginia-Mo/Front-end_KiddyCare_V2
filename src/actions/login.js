export const LOGIN = 'LOGIN';

export function handleLogin() {
  return {
    type: LOGIN,
  };
}
export const SAVE_USER = 'SAVE_USER';

export function saveUser(data) {
  return {
    type: SAVE_USER,
    payload: { data },
  };
}
export const LOG_OUT = 'LOG_OUT';

export function logOutUser() {
  return {
    type: LOG_OUT,
  };
}
