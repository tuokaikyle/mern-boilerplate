export const initialState = {};

export const reducer = (state, action) => {
  if (action.type === 'TO_UPDATE') {
    return {
      ...state,
      to_update: action.payload,
    };
  }
  if (action.type === 'CHANGED') {
    return {
      ...state,
    };
  }

  return state;
};
