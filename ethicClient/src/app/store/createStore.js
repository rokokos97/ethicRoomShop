import professionsReducer from "./professions";
import usersReducer from "./users";
import categoriesReducer from "./categories";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    professions: professionsReducer,
    users: usersReducer,
    categories: categoriesReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
