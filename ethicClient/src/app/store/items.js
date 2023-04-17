import {createSlice} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import itemService from '../services/item.service';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
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
    },
    itemDeleteRequested(state) {
      state.isLoading = true;
    },
    itemDeleteReceived(state, action) {
      state.isLoading = false;
      state.entities = state.entities
          .filter((item) => item._id !== action.payload);
    },
    itemDeleteRequestFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const {reducer: itemsReducer, actions} = itemsSlice;
const {
  itemsRequested,
  itemsReceived,
  itemsRequestFiled,
  itemCreateRequested,
  itemCreateReceived,
  itemCreateRequestFiled,
  itemDeleteRequested,
  itemDeleteReceived,
  itemDeleteRequestFailed,

} =
    actions;

export const loadItemsList = () => async (dispatch) => {
  dispatch(itemsRequested());
  try {
    const {content} = await itemService.get();
    dispatch(itemsReceived(content));
  } catch (error) {
    dispatch(itemsRequestFiled(error.message));
  }
};
export const createItem = (payload) => async (dispatch) => {
  dispatch(itemCreateRequested());
  try {
    const {content} = await itemService.create(payload);
    toast.dark('item has been created!', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    await dispatch(itemCreateReceived(content));
  } catch (error) {
    dispatch(itemCreateRequestFiled(error.message));
  }
};
export const deleteItem = (id) => async (dispatch) => {
  dispatch(itemDeleteRequested());
  try {
    await itemService.delete(id);
    toast.dark('item has been deleted!', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    dispatch(itemDeleteReceived(id));
  } catch (e) {
    dispatch(itemDeleteRequestFailed(e.message));
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
