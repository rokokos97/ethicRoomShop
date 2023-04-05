import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { loadCategoriesList } from "../../../store/categories";
import { loadItemsList } from "../../../store/items";
import localStorageService from "../../../services/localStorage.service";
import { loadUser } from "../../../store/user";
const AppLoader = ({ children }) => {
    const userId = localStorageService.getUserId();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCategoriesList());
        dispatch(loadItemsList());
        if (userId) { dispatch(loadUser()); }
    }, []);
    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default AppLoader;
