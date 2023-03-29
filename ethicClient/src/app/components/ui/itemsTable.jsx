import React from "react";
import Table from "../common/table";
import PropTypes from "prop-types";
import Category from "./category";
import Composition from "./composition";

const ItemsTable = ({ items, onSort, selectedSort }) => {
    const columns = {
      name: {
        path: "name",
        name: "Name"
      },
      price: {
        path: "price",
        name: "Price"
      },
      size: {
        path: "size",
        name: "Size"
      },
      description: {
        path: "description",
        name: "Description"
      },
      composition: {
        // path: "composition",
        name: "Composition",
        component: (item) => <Composition composition={item.composition} />
      },
      category: {
        // path: "category",
        name: "Category",
        component: (item) => <Category _id={item.category} />
      }

    };
    return (
      <>
        <Table
          data={items}
          columns={columns}
          onSort={onSort}
          selectedSort={selectedSort}
        />
      </>
    );
};
ItemsTable.propTypes = {
  items: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired
};
export default ItemsTable;
