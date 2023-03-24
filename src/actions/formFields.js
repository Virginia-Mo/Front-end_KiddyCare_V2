export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export function changeInputValue(key, value) {
    return {
      type: CHANGE_INPUT_VALUE,
      payload: {
        key,
        value,
      },
    };
  }
export const SAVE__ID = 'SAVE__ID';

export function saveId(id) {
  return {
    type: SAVE__ID,
    payload: { id },
  };
}
