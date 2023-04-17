import itemsReducer from './items';
import usersReducer from './user';
import categoriesReducer from './categories';
import cartReducer from './cart';

const {combineReducers, configureStore} = require('@reduxjs/toolkit');

const rootReducer = combineReducers({
  categories: categoriesReducer,
  items: itemsReducer,
  user: usersReducer,
  cart: cartReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
