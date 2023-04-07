import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getIsLoadingUser, getUser } from "../../../store/user";
import history from "../../../utils/history";
const UserPage = () => {
    const isUserLoading = useSelector(getIsLoadingUser());
    const user = useSelector(getUser());
  if (!isUserLoading) {
        return (
          <>
            <div className="d-flex justify-content-between m-5">
              <i className="bi bi-arrow-left" role="button" onClick={() => history.goBack()}>back to catalogue</i>
              <i className="bi bi-x-lg" role="button" onClick={() => history.goBack()}/>
            </div>
            <div className=" container mt-5">
              <div className="row">
                <div className="card col-md-6 offset-md-3 shadow p-4">
                  <h3>Name: {user.name}</h3>
                  <h3>Email: {user.email}</h3>
                  <h3>Sex: {user.sex}</h3>
                </div>
              </div>
            </div>
            <div className="container d-flex">
            </div>
          </>
        );
    } else {
        return <h1>Loading...</h1>;
    }
};
UserPage.propTypes = {
    itemId: PropTypes.string
};
export default UserPage;
