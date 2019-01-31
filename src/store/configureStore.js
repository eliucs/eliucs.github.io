import { createStore, combineReducers } from 'redux';
import {
  NavBarThemeReducer,
  NavBarHamburgerReducer,
  NavBarPageThemeReducer,
  MenuReducer,
  MarkdownReducer,
} from 'reducers';

export default () => {
  const store = createStore(combineReducers({
    navBarTheme: NavBarThemeReducer,
    navBarActive: NavBarHamburgerReducer,
    navBarPageTheme: NavBarPageThemeReducer,
    isMenuOpen: MenuReducer,
    cachedContent: MarkdownReducer,
  }));
  return store;
};
