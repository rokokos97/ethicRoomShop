import {createSlice} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    entities: [],
    user: null,
  },
  reducers: {
    addedItem(state, action) {
      state.entities.push(action.payload);
    },
    removeOneItem(state, action) {
      const index = state.entities.findIndex((el) => el._id === action.payload);
      if (index !== -1) {
        state.entities.splice(index, 1);
      }
    },
    deletedItems(state) {
      state.entities = [];
    },
  },
});

const {reducer: cartReducer, actions} = cartSlice;
const {addedItem, deletedItems, removeOneItem} = actions;

export const addItemInCart = (item) => (dispatch) => {
  dispatch(addedItem(item));
};

export const removeOneItemFromCart = (itemId) => (dispatch) => {
  dispatch(removeOneItem(itemId));
};

export const deleteItemsFromCart = () => (dispatch) => {
  dispatch(deletedItems());
  toast.dark('Your order has been placed', {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};

export const getCart = () => (state) => state.cart.entities;

export default cartReducer;
