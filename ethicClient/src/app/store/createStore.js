import itemsReducer from "./items";
import usersReducer from "./users";
import categoriesReducer from "./categories";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    items: itemsReducer,
    users: usersReducer,
    categories: categoriesReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
