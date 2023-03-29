import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemsCategoryCard = ({ item }) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="m-2" >
        <Card.Img variant="top" src={item.imgURL} />
        <Card.Body>
          <Card.Title>
            <Link
              className="nav-link link-dark"
              aria-current="page"
              to={`/${item.name}`}
            >
              <p className="text-center">
                {item.name}
              </p>
            </Link>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};
ItemsCategoryCard.propTypes = {
  item: PropTypes.object
};
export default ItemsCategoryCard;
