import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {logOut} from '../store/user';
import Main from './main';

const LogOut = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logOut());
  }, []);
  return <Main/>;
};
export default LogOut;
