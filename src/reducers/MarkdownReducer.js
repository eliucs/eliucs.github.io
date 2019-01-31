const defaultState = {};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CACHE_CONTENT': {
      const { key, content } = action.data;
      return {
        ...state,
        [key]: content,
      };
    }
    default:
      return state;
  }
};

export default reducer;
