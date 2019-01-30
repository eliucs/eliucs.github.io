import { NavBarModeEnum } from 'enums';

const defaultState = NavBarModeEnum.Light;

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_THEME_LIGHT':
      return NavBarModeEnum.Light;
    case 'SET_THEME_DARK':
      return NavBarModeEnum.Dark;
    default:
      return state;
  }
};

export default reducer;
