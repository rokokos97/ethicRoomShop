import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getItemById } from "../../../store/items";
import { useParams } from "react-router-dom";
import BackHistoryBlock from "../../common/backButton";
import { addItemInCart } from "../../../store/cart";

const ItemPage = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const item = useSelector(getItemById(itemId));
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItemInCart(item));
  };
  if (item) {
        return (
          <>
            <BackHistoryBlock/>
            <div className="card mb-3 w-75 mx-auto">
              <div className="row g-0">
                <div className="col-md-6">
                  <img src={`http://localhost:8080/api${item.image}`} className="img-fluid rounded-start" alt="item image"/>
                </div>
                <div className="col-md-4 mx-2">
                  <div className="card-body">
                    <h3 className="card-title m-3">{item.name}</h3>
                    <p className="card-text m-3">{item.description}</p>
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="btn btn-dark text-white m-3">  Buy Now  </button>
                    <p className="card-text m-3"><small className="text-muted">{item.composition}</small></p>
                  </div>
                </div>
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
