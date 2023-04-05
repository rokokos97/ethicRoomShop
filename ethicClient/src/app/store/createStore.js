import itemsReducer from "./items";
import usersReducer from "./user";
import categoriesReducer from "./categories";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    categories: categoriesReducer,
    items: itemsReducer,
    user: usersReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
