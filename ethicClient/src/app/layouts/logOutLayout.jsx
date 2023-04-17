import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {logOut} from '../store/user';
import MainLayout from './mainLayout';

const LogOutLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logOut());
  }, []);
  return <MainLayout/>;
};
export default LogOutLayout;
