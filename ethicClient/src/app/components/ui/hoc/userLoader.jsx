import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoadingUser, loadUser } from "../../../store/user";

const UserLoader = ({ children }) => {
    const dataStatus = useSelector(getIsLoadingUser());
    const dispatch = useDispatch();
    useEffect(() => {
        if (!dataStatus) dispatch(loadUser());
    }, []);
    if (!dataStatus) return "Loading";
    return children;
};

UserLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default UserLoader;
