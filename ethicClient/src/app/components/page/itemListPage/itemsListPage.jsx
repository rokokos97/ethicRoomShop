import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getItems, getItemsLoadingStatus } from "../../../store/items";
import ItemsTable from "../../ui/itemsTable";
const ItemsListPage = () => {
  const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
  const items = useSelector(getItems());
  const isItemsLoading = useSelector(getItemsLoadingStatus());
  const handleSort = (item) => {
    setSortBy(item);
  };
  return (
    <>
      {!isItemsLoading &&
      <ItemsTable
        items={items}
        onSort={handleSort}
        selectedSort={sortBy}
      />
      }
    </>
  );
};

export default ItemsListPage;
