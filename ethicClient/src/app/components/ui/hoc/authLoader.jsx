import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {getIsLoggedIn} from '../../../store/user';
import {Navigate} from 'react-router-dom';

const AuthLoader = ({children}) => {
  const isLogged = useSelector(getIsLoggedIn());
  if (isLogged) return <Navigate to="/"/>;
  return children;
};

AuthLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default AuthLoader;
