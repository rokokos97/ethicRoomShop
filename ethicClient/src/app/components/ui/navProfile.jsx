import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getIsLoadingUser, getUser } from "../../store/user";
const NavProfile = () => {
    const isUserLoading = useSelector(getIsLoadingUser());
    const [isOpen, setOpen] = useState(false);
    const user = useSelector(getUser());
    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };
    if (isUserLoading) return "loading";
    return (
      <div className="dropdown w-100" onClick={toggleMenu}>
        <div className="btn dropdown-toggle d-flex align-items-center">
          <div className="me-2">{user.name.toUpperCase()}</div>
        </div>
        <div className={"w-100 dropdown-menu" + (isOpen ? " show" : "")}>
          <Link
            to={`/user`}
            className="dropdown-item"
          >
            <i className="bi bi-person mx-1"></i>
            <span>Profile</span>
          </Link>
          <Link to="/user/cart" className="dropdown-item">
            <i className="bi bi-bag mx-1"></i>
            <span>Cart</span>
          </Link>
          <Link to="/logout" className="dropdown-item">
            <i className="bi bi-box-arrow-left mx-1"></i>
            <span>Log Out</span>
          </Link>
        </div>
      </div>
    );
};
export default NavProfile;
