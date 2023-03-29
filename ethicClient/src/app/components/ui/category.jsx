import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
  getCategoryById,
  getCategoriesLoadingStatus
} from "../../store/categories";

const Category = ({ _id }) => {
  const id = _id[0];
  const isLoading = useSelector(getCategoriesLoadingStatus());
  const category = useSelector(getCategoryById(id));
  console.log(category.name);
  return (
    <>
      {
        !isLoading && <p>{category.name}</p>
      }
    </>
  );
};
Category.propTypes = {
  _id: PropTypes.array
};
export default Category;
