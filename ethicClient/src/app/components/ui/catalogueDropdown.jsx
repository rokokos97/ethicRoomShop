import React from "react";
import { useSelector } from "react-redux";
import {
  getCategories,
  getCategoriesLoadingStatus
} from "../../store/categories";
import { Nav, NavDropdown } from "react-bootstrap";

const CatalogueDropdown = () => {
  const isCategoriesLoading = useSelector(getCategoriesLoadingStatus());
  const categories = useSelector(getCategories());
  return (
    <Nav>
      <NavDropdown
        title="CATALOGUE"
      >
        {
          !isCategoriesLoading && categories.map((category) => (
            <NavDropdown.Item key={category._id}>{category.name}</NavDropdown.Item>
          ))
        }
      </NavDropdown>
    </Nav>
  );
};
export default CatalogueDropdown;
