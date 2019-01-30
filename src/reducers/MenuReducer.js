const defaultState = false;

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'MENU_OPEN':
      return true;
    case 'MENU_CLOSE':
      return false;
    default:
      return state;
  }
};

export default reducer;
