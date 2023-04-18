import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemInCart, deleteItemsFromCart,
  getCart,
  removeOneItemFromCart,
} from '../../store/cart';
import BackHistoryBlock from '../common/backHistoryBlock';
import {useNavigate} from 'react-router-dom';
import config from '../../config.json';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(getCart());
  const handleAdd = (item) => {
    dispatch(addItemInCart(item));
  };
  const handleRemoveOneItem = (itemId) => {
    dispatch(removeOneItemFromCart(itemId));
  };
  const handleCheckout = () => {
    dispatch(deleteItemsFromCart());
    navigate('/items');
  };
  const totalIncrease = (cart) => {
    const newArray = [];
    for (const good of cart) {
      const found = newArray.find((item) => item._id === good._id);
      if (found) {
        found.count++;
        found.totalPrice += found.price;
      } else {
        const newGood = {...good, count: 1, totalPrice: good.price};
        newArray.push(newGood);
      }
    }
    return newArray;
  };
  function totalAmount(cart) {
    return cart.map((e) => e.totalPrice).reduce((a, b) => Math.floor(a + b));
  }
  const newCart = (totalIncrease(cart));
  return (
    <>
      <BackHistoryBlock/>
      {
        newCart.length > 0 ?
          <div className="card mb-3">
            <img
              src={`${config.apiEndpoint}/upload/aboutUs01.png`}
              className="card-img-top"
              alt="..."/>
            <div className="card-body">
              <h5 className="card-title text-sm-center">YOUR CART</h5>
              {newCart.map((item, index) => (
                <div
                  key={index}
                  className="card mb-3 w-75 mx-auto bg-dark text-white"
                >
                  <div className="d-flex align-items-center row g-0">
                    <div className="col-md-1">
                      <img src={`http://localhost:8080/api${item.image}`} className="img-fluid rounded-start" alt="item mini image"/>
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text">
                          <small className="text-muted">
                            {`${item.price} UAH`}
                          </small>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-2 align-items-center">
                      <button
                        className="btn btn-light"
                        onClick={ () => {
                          handleRemoveOneItem(item._id);
                        }}
                      >
                        -
                      </button>
                      <span className="m-3">{item.count}</span>
                      <button
                        className="btn btn-light"
                        onClick={() => {
                          handleAdd(item);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div className="col-md-2">
                      <p className="text-center">price</p>
                      <h5 className="text-center">
                        {`${item.totalPrice} UAH`}
                      </h5>
                    </div>
                  </div>
                </div>
              ))
              }
              <div className="card mb-3 w-75 mx-auto bg-dark text-white" >
                <div className="d-flex align-items-center row g-0">
                  <div className="col-md-8">
                    <div className="card-body">
                      <button
                        className="btn btn-light container-fluid"
                        onClick={handleCheckout}
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2 align-items-center">
                    <span className="m-3">TOTAL AMOUNT:</span>
                  </div>
                  <div className="col-md-2">
                    <span className="text-center">
                      {`${totalAmount(newCart)} UAH`}
                    </span>
                  </div>
                </div>
              </div>
              <span className="card-text text-end col-md-8"></span>
            </div>
          </div> :
          <>
            <h1 className="text-center">Your cart is empty</h1>
            <h1 className="text-center"><i className="bi bi-bag"></i></h1>
          </>
      }
    </>
  );
};
export default Cart;
