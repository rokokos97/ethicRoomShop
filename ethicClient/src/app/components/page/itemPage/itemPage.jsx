import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getItemById } from "../../../store/items";
import { Image } from "react-bootstrap";
import img from "../../../images/itemImage/blackTankTop2.jpeg";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

const ItemPage = () => {
    const history = useHistory();
    const params = useParams();
  console.log(params);
  const item = useSelector(getItemById(itemId));
    if (item) {
        return (
          <>
            <div className="d-flex justify-content-between m-5">
              <i className="bi bi-arrow-left" role="button" onClick={() => history.goBack()}>back to catalogue</i>
              <i className="bi bi-x-lg" role="button" onClick={() => history.goBack()}/>
            </div>
            <div className="container d-flex">
              <div className="w-50 d-flex justify-content-center">
                <Image className="w-75" fluid src={img}/>
              </div>
              <div>
                <h1>{item.name}</h1>
                <h2>{`${item.price} UAH`}</h2>
                <button>Buy now</button>
                <h2>{item.description}</h2>
                <h3>{item.composition}</h3>
              </div>
            </div>
          </>

        );
    } else {
        return <h1>Loading...</h1>;
    }
};

ItemPage.propTypes = {
    itemId: PropTypes.string
};

export default ItemPage;
