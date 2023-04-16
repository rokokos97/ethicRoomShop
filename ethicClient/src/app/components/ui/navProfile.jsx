import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getIsLoadingUser, getUser } from "../../store/user";
import useCart from "../hooks/useCart";

const NavProfile = () => {
  const isUserLoading = useSelector(getIsLoadingUser());
  const [isOpen, setOpen] = useState(false);
  const user = useSelector(getUser());
  const isCart = useCart();
  const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };
    if (isUserLoading) return "loading";
    return (
      <div className="dropdown w-100" onClick={toggleMenu}>
        <div className="btn dropdown-toggle d-flex align-items-center ">
          <div className="me-2 position-relative">
            {user.name.toUpperCase()}
            {isCart
              ? <span
              className="position-absolute top-0 start-0 translate-middle badge bg-dark rounded-pill bg-danger">
              {isCart}
            </span>
            : ""}
          </div>

        </div>
        <div className={"w-100 dropdown-menu" + (isOpen ? " show" : "")}>
          <Link
            to={`/user`}
            className="dropdown-item"
          >
            <i className="bi bi-person mx-1"><span className="mx-2">Profile</span></i>
          </Link>
          <Link to="/user/cart" className="dropdown-item">
            <i className={`bi bi-bag${(isCart) ? "-fill" : ""} mx-1`}>
              <span className="mx-2">Cart</span>
            </i>
          </Link>
          <Link to="/logout" className="dropdown-item">
            <i className="bi bi-box-arrow-left mx-1"><span className="mx-2">Log Out</span></i>
          </Link>
        </div>
      </div>
    );
};
export default NavProfile;
