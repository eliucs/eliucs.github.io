import { createStore, combineReducers } from 'redux';
import {
  NavBarThemeReducer,
  NavBarHamburgerReducer,
  NavBarPageThemeReducer,
  MenuReducer,
} from 'reducers';

export default () => {
  const store = createStore(combineReducers({
    navBarTheme: NavBarThemeReducer,
    navBarActive: NavBarHamburgerReducer,
    navBarPageTheme: NavBarPageThemeReducer,
    isMenuOpen: MenuReducer,
  }));
  return store;
};
