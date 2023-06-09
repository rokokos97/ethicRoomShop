import {createAction, createSlice} from '@reduxjs/toolkit';
import authService from '../services/auth.service';
import localStorageService from '../services/localStorage.service';
import userService from '../services/user.service';
import {generateAuthError} from '../utils/generateAuthError';
import history from '../utils/history';
import {toast} from 'react-toastify';
const initialState = localStorageService.getAccessToken() ?
  {
    entities: null,
    isLoading: true,
    error: null,
    auth: {userId: localStorageService.getUserId()},
    isLoggedIn: true,
  }:
  {
    entities: null,
    isLoading: false,
    error: null,
    auth: null,
    isLoggedIn: false,
  };

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authRequestSuccess: (state, action) => {
      state.entities = action.payload;
      state.auth = action.payload._id;
      state.isLoggedIn = true;
      state.error = null;
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload;
    },
    userCreated: (state, action) => {
      state.entities.push(action.payload);
    },
    userLoggedOut: (state) => {
      state.entities = null;
      state.isLoggedIn = false;
      state.auth = null;
    },
    userUpdateSuccess: (state, action) => {
      state.entities = action.payload;
    },
    authRequested: (state) => {
      state.error = null;
    },
    userLoadRequestSuccess: (state, action) => {
      state.entities = action.payload;
      state.auth = action.payload._id;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
  },
});
const {reducer: usersReducer, actions} = usersSlice;
const {
  authRequestFailed,
  authRequestSuccess,
  userLoggedOut,
  userUpdateSuccess,
  userLoadRequestSuccess,
} = actions;

const authRequested = createAction('users/authRequested');
const userLoadRequested = createAction('users/userLoadRequested');
const userLoadRequestFailed = createAction('users/userLoadRequestFailed');
const userUpdateFailed = createAction('users/userUpdateFailed');
const userUpdateRequested = createAction('users/userUpdateRequested');

export const signUp = (payload) =>
  async (dispatch) => {
    dispatch(authRequested());
    try {
      const data = await authService.register(payload);
      localStorageService.setTokens(data);
      dispatch(authRequestSuccess(data.user));
    } catch (error) {
      dispatch(authRequestFailed(error.message));
    }
  };
export const login = ({payload, redirect}) => async (dispatch) => {
  const {email, password} = payload;
  dispatch(authRequested());
  try {
    const data = await authService.login({email, password});
    localStorageService.setTokens(data);
    dispatch(authRequestSuccess(data.user));
    toast.dark('You are logged in', {
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true,
    });
    history.push(redirect);
  } catch (error) {
    const {code, message} = error.response.data.errors;
    if (code === 400) {
      const errorMessage = generateAuthError(message);
      dispatch(authRequestFailed(errorMessage));
    } else {
      toast.dark(error, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  }
};
export const logOut = () => (dispatch) => {
  localStorageService.removeAuthData();
  dispatch(userLoggedOut());
  history.push('/');
};
export const updateUser = (payload) => async (dispatch) => {
  dispatch(userUpdateRequested());
  try {
    const {content} = await userService.update(payload);
    dispatch(userUpdateSuccess(content));
    toast.dark('User info updated', {
      hideProgressBar: true,
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    history.push(`/user`);
  } catch (error) {
    dispatch(userUpdateFailed(error.message));
  }
};
export const loadUser = () => async (dispatch) => {
  dispatch(userLoadRequested());
  try {
    const {content} = await userService.getCurrentUser();
    dispatch(userLoadRequestSuccess({...content}));
  } catch (error) {
    console.log(error);
    dispatch(userLoadRequestFailed(error.message));
  }
};
export const getUser = () => (state) => state.user.entities;
export const getIsLoadingUser = () => (state) => state.user.isLoading;
export const getIsLoggedIn = () => (state) => state.user.isLoggedIn;
export const getAuthErrors = () => (state) => state.user.error;
export default usersReducer;
