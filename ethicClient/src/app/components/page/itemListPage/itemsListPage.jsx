import React from "react";
import { useSelector } from "react-redux";
import { getItems, getItemsLoadingStatus } from "../../../store/items";
import ItemsTable from "../../ui/itemsTable";
const ItemsListPage = () => {
  const items = useSelector(getItems());
  const isItemsLoading = useSelector(getItemsLoadingStatus());
  return (
    <>
      {!isItemsLoading &&
      <ItemsTable items={items}/>
      }
    </>
  );
};

export default ItemsListPage;
