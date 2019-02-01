const defaultState = false;

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'HAMBURGER_OPEN':
      return true;
    case 'HAMBURGER_CLOSE':
      return false;
    default:
      return state;
  }
};

export default reducer;
