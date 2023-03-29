import React from "react";
import { useSelector } from "react-redux";
import { getItems, getItemsLoadingStatus } from "../store/items";
import ItemCard from "./itemCard";

const ItemsListPage = () => {
  const items = useSelector(getItems());
  const isLoading = getItemsLoadingStatus();
  console.log(items);
  return (
    <>
      { !isLoading &&
        items.map(item => <ItemCard key={item._id} id={item._id}/>)
      }
    </>
  );
};

export default ItemsListPage;
