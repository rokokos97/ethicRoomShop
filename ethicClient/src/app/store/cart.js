import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    entities: [],
    user: null
  },
  reducers: {
    addedItem(state, action) {
      console.log("action.payload", action.payload);
      state.entities.push(action.payload);
    },
    removeOneItem(state, action) {
      const index = state.entities.findIndex(el => el._id === action.payload);
      if (index !== -1) {
        state.entities.splice(index, 1);
      }
    },
    deletedItem(state, action) {
      state.entities = state.entities.filter(el => el._id !== action.payload);
    }
  }
});

const { reducer: cartReducer, actions } = cartSlice;
const { addedItem, deletedItem, removeOneItem } = actions;

export const addItemInCart = (item) => (dispatch) => {
  console.log(item);
  dispatch(addedItem(item));
};

export const removeOneItemFromCart = (itemId) => (dispatch) => {
  dispatch(removeOneItem(itemId));
};

export const deleteItemFromCart = (id) => (dispatch) => {
  dispatch(deletedItem(id));
};

export const getCart = () => (state) => state.cart.entities;

export default cartReducer;
