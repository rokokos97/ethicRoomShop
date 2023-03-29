import { createSlice } from "@reduxjs/toolkit";
import itemService from "../services/item.service";
import isOutdated from "../utils/isOutdated";

const itemsSlice = createSlice({
    name: "items",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        itemsRequested: (state) => {
            state.isLoading = true;
        },
        itemsReceived: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        itemsRequestFiled: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        itemCreated: (state, action) => {
            state.entities.push(action.payload);
        }
    }
});

const { reducer: itemsReducer, actions } = itemsSlice;
const { itemsRequested, itemsReceived, itemsRequestFiled } =
    actions;

export const loadItemsList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().items;
    if (isOutdated(lastFetch)) {
        dispatch(itemsRequested());
        try {
            const { content } = await itemService.get();
            dispatch(itemsReceived(content));
        } catch (error) {
            dispatch(itemsRequestFiled(error.message));
        }
    }
};
export const getItems = () => (state) => state.items.entities;
export const getItemsLoadingStatus = () => (state) =>
    state.items.isLoading;
export const getItemById = (id) => (state) => {
    if (state.items.entities) {
        return state.items.entities.find((p) => p._id === id);
    }
};
export default itemsReducer;
