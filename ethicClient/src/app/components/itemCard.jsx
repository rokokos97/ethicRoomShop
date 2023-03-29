import React from "react";
import { useSelector } from "react-redux";
import { getItemById } from "../store/items";
import PropTypes from "prop-types";

const ItemCard = ({ id }) => {
  const item = useSelector(getItemById(id));
  console.log(item);
  return <h1>{`Item Card ${id}`}</h1>;
};
ItemCard.propTypes = {
  id: PropTypes.string
};
export default ItemCard;
