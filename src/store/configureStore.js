import { createStore, combineReducers } from 'redux';
import {
  NavBarThemeReducer,
  MenuReducer,
} from 'reducers';

export default () => {
  const store = createStore(combineReducers({
    navBarTheme: NavBarThemeReducer,
    isMenuOpen: MenuReducer,
  }));
  return store;
};
