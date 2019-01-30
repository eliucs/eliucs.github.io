import { createStore, combineReducers } from 'redux';
import {
  NavBarThemeReducer,
  NavBarHamburgerReducer,
  MenuReducer,
} from 'reducers';

export default () => {
  const store = createStore(combineReducers({
    navBarTheme: NavBarThemeReducer,
    navBarActive: NavBarHamburgerReducer,
    isMenuOpen: MenuReducer,
  }));
  return store;
};
