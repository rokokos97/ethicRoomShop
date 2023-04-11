import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getItems, getItemsLoadingStatus } from "../../../store/items";
import ItemCard from "../../ui/itemCard";
import { NavLink } from "react-router-dom";
import Pagination from "../../common/pagination";
import { paginate } from "../../../utils/paginate";
import {
  getCategories,
  getCategoriesLoadingStatus
} from "../../../store/categories";
import GroupList from "../../common/groupList";
import _ from "lodash";

const ItemsListPage = () => {
  const isItemsLoading = useSelector(getItemsLoadingStatus());
  const items = useSelector(getItems());
  const pageSize = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [initialSort, setInitialSort] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState();
  const isCategoryLoading = useSelector(getCategoriesLoadingStatus());
  const categories = useSelector(getCategories());
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);
  const handleCategorySelect = (item) => {
    if (searchQuery !== "") setSearchQuery("");
    setSelectedCategory(item);
  };
  const handleSort = (direction) => {
    direction === "asc"
      ? setInitialSort("desc")
      : setInitialSort("asc");
  };
  const handleSearchQuery = ({ target }) => {
    setSelectedCategory(undefined);
    setSearchQuery(target.value);
  };
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  function filterItems(data) {
    return searchQuery
      ? data.filter(
        (item) =>
          item.name
            .toLowerCase()
            .indexOf(searchQuery.toLowerCase()) !== -1
      )
      : selectedCategory
        ? data.filter((item) => {
          return item.category[0] === selectedCategory._id;
        })
        : data;
  }
  const filteredItems = filterItems(items);
  const sortedItems = _.orderBy(filteredItems, "price", initialSort);
  const itemsCrop = paginate(sortedItems, currentPage, pageSize);
  return (
    <>
      { !isItemsLoading && !isCategoryLoading &&
          <div className="mx-auto m-3 m-75">
              <GroupList
                selectedItem={selectedCategory}
                items={categories}
                onItemSelect={handleCategorySelect}
                onChange={handleSearchQuery}
                value={searchQuery}
                initialSort={initialSort}
                onSort= {handleSort}
              />
          <ul className="d-flex flex-wrap list-unstyled justify-content-center">
            {
              !isItemsLoading && itemsCrop.map((item, index) => (
                <li
                  key={index}
                  className="w-25 m-1 mb-5 p-2"
                >
                  <NavLink
                    to={`/items/${item._id}`}
                    className="link-dark nav-link"
                  ><ItemCard item={item}/></NavLink>
                </li>
              ))
            }
          </ul>
          <div className="d-flex justify-content-center">
            <Pagination
              pageSize={pageSize}
              onPageChange={handlePageChange}
              currentPage={currentPage}
              itemsCount={sortedItems.length}
            />
          </div>
        </div>
      }
    </>
  );
};

export default ItemsListPage;
