import {createSlice} from '@reduxjs/toolkit';
import categoryService from '../services/category.service';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
    lastFetch: null,
  },
  reducers: {
    categoriesRequested: (state) => {
      state.isLoading = true;
    },
    categoriesReceived: (state, action) => {
      state.entities = action.payload;
      state.lastFetch = Date.now();
      state.isLoading = false;
    },
    categoriesRequestFiled: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const {reducer: categoriesReducer, actions} = categoriesSlice;
const {categoriesRequested, categoriesReceived, categoriesRequestFiled} =
    actions;

export const loadCategoriesList = () => async (dispatch) => {
  dispatch(categoriesRequested());
  try {
    const {content} = await categoryService.get();
    dispatch(categoriesReceived(content));
  } catch (error) {
    dispatch(categoriesRequestFiled(error.message));
  }
};
export const getCategories = () => (state) => state.categories.entities;
export const getCategoriesLoadingStatus = () => (state) =>
  state.categories.isLoading;
export const getCategoryById = (id) => (state) => {
  if (state.categories.entities) {
    return state.categories.entities.find((p) => p._id === id);
  }
};
export default categoriesReducer;
