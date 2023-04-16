import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {getIsLoadingUser, getUser} from '../../../store/user';
import {NavLink} from 'react-router-dom';
import BackHistoryBlock from '../../common/backHistoryBlock';
const UserPage = () => {
  const isUserLoading = useSelector(getIsLoadingUser());
  const user = useSelector(getUser());
  if (!isUserLoading) {
    return (
      <>
        <BackHistoryBlock/>
        <div className="card text-center w-50 mx-auto">
          <div className="card-header">
                Hello {user.name}
          </div>
          <div className="card-body">
            <p className="card-text">Name: {user.name}</p>
            <p className="card-text">Email: {user.email}</p>
            <p className="card-text">Sex: {user.sex}</p>
            <NavLink to="edit" role="button">
              <button className="btn btn-secondary">Edit user info</button>
            </NavLink>
          </div>
          <div className="card-footer text-muted">
                Welcome to Ethic Room
          </div>
        </div>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};
UserPage.propTypes = {
  itemId: PropTypes.string,
};
export default UserPage;
