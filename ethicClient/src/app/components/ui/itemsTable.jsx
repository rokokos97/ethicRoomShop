import React from "react";
import Table from "../common/table";
import PropTypes from "prop-types";
import Category from "./category";
import Composition from "./composition";

const ItemsTable = ({ items }) => {
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
        name: "Composition",
        component: (item) => <Composition composition={item.composition} />
      },
      category: {
        name: "Category",
        component: (item) => <Category category={item.category} />
      }

    };
    return (
      <>
        <Table
          data={items}
          columns={columns}
        />
      </>
    );
};
ItemsTable.propTypes = {
  items: PropTypes.array.isRequired
};
export default ItemsTable;
