import { createStore, combineReducers } from 'redux';
import { NavBarThemeReducer } from 'reducers';

export default () => {
  const store = createStore(combineReducers({
    navBarTheme: NavBarThemeReducer,
  }));
  return store;
};
