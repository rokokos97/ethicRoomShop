import React from "react";
import { useSelector } from "react-redux";
import {
  getCategories,
  getCategoriesLoadingStatus
} from "../../../store/categories";
import CategoryCard from "../../ui/categoryCard";
const CategoriesListPage = () => {
  const isLoading = useSelector(getCategoriesLoadingStatus());
  const items = useSelector(getCategories());
  return (
    <>
      <div className="mx-auto m-5">
        <ul className="d-flex flex-wrap list-unstyled justify-content-around">
          {
            !isLoading && items.map((item, index) => (
             <li
               key={index}
               className="m-1"
             >
               <CategoryCard item={item} />
             </li>
            ))
          }
        </ul>
      </div>

    </>
  );
};

export default CategoriesListPage;
