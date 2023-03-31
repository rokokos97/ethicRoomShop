import React from "react";
import { useSelector } from "react-redux";
import { getItems, getItemsLoadingStatus } from "../../../store/items";
import ItemCard from "../../ui/itemCard";
import { Link } from "react-router-dom";
const ItemsListPage = () => {
  const isLoading = useSelector(getItemsLoadingStatus());
  const items = useSelector(getItems());
  return (
    <>
      <div className="mx-auto m-5">
        <ul className="d-flex flex-wrap list-unstyled justify-content-around">
          {
            !isLoading && items.map((item, index) => (
             <li
               key={index}
               className="w-25 m-1 mb-5"
             >
               <Link to={`/items/${item._id}`} ><ItemCard item={item}/></Link>
             </li>
            ))
          }
        </ul>
      </div>

    </>
  );
};

export default ItemsListPage;
