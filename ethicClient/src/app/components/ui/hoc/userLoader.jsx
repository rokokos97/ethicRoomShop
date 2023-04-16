import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../../store/user";
import { Navigate } from "react-router-dom";

const UserLoader = ({ children }) => {
    const isLogged = useSelector(getIsLoggedIn());
    if (!isLogged) return <Navigate to="/login"/>;
    return children;
};

UserLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default UserLoader;
