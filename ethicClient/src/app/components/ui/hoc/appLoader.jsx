import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { loadCategoriesList } from "../../../store/categories";
import { loadItemsList } from "../../../store/items";
const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCategoriesList());
        dispatch(loadItemsList());
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
