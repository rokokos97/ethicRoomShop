import React from "react";
import ItemsCategoryCard from "./itemsCategoryCard";
import { getCategories, getCategoriesLoadingStatus } from "../store/categories";
import { useSelector } from "react-redux";

const CategoriesListPage = () => {
  const isCategoryLoading = useSelector(getCategoriesLoadingStatus());
  const category = useSelector(getCategories());
  return (isCategoryLoading
      ? <div
        className="spinner-grow text-dark d-flex m-5 mx-auto"
        role="status"
      />
      : <div className="d-flex flex-wrap mx-auto justify-content-center">
        {category.map((item) =>
          <ItemsCategoryCard key={item._id} item={item}/>
        )
        }
      </div>
  );
};

export default CategoriesListPage;
