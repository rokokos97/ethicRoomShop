import React from "react";
import PropTypes from "prop-types";
import ItemPage from "../page/itemPage";

const ItemsTable = ({ items }) => {
  return (
      <>
        <ul>
          <li>
            { items.map(item => <ItemPage
              key={item._id}
              itemId = {item._id}/>
            )}
              </li>
            </ul>
      </>
    );
};
ItemsTable.propTypes = {
  items: PropTypes.array.isRequired
};
export default ItemsTable;
