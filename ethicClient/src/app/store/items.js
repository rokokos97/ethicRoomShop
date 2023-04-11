import { createSlice } from "@reduxjs/toolkit";
import itemService from "../services/item.service";

const itemsSlice = createSlice({
    name: "items",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        itemsRequested: (state) => {
            state.isLoading = true;
        },
        itemsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        itemsRequestFiled: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        itemCreateRequested: (state) => {
            state.isLoading = true;
        },
        itemCreateReceived: (state, action) => {
            state.isLoading = false;
            state.entities.push(action.payload);
        },
        itemCreateRequestFiled: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: itemsReducer, actions } = itemsSlice;
const {
    itemsRequested,
    itemsReceived,
    itemsRequestFiled,
    itemCreateRequested,
    itemCreateReceived,
    itemCreateRequestFiled
} =
    actions;

export const loadItemsList = () => async (dispatch) => {
        dispatch(itemsRequested());
        try {
            const { content } = await itemService.get();
            dispatch(itemsReceived(content));
        } catch (error) {
            dispatch(itemsRequestFiled(error.message));
        }
};
export const createItem = (payload) => async (dispatch) => {
    dispatch(itemCreateRequested());
    try {
        const data = await itemService.create(payload);
        dispatch(itemCreateReceived(data));
    } catch (error) {
        dispatch(itemCreateRequestFiled(error.message));
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
