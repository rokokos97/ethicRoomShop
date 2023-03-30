import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getIsLoggedIn } from "../../store/users";
import NavProfile from "./navProfile";
import CatalogueDropdown from "./catalogueDropdown";
const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    return (
        <nav className="navbar bg-light mb-3">
            <div className="container-fluid">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link link-dark" aria-current="page" to="/">
                            <h3>ETHIC</h3>
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link link-dark" aria-current="page" to="/items">
                            <h3>ITEMS</h3>
                        </Link>
                    </li>
                    {isLoggedIn && (
                        <li className="nav-item">
                            <Link
                                className="nav-link "
                                aria-current="page"
                                to="/users"
                            >
                                Users
                            </Link>
                        </li>
                    )}
                </ul>
                <div className="d-flex">
                    <ul className="nav">
                        <li className="nav-item">
                            <CatalogueDropdown>
                                CATALOGUE
                            </CatalogueDropdown>
                        </li>
                        <li className="nav-item"><Link
                          className="nav-link link-dark"
                          aria-current="page"
                          to="/about"
                        >
                            ABOUT US
                        </Link></li>
                        <li className="nav-item"><Link
                          className="nav-link link-dark"
                          aria-current="page"
                          to="/info"
                        >
                            INFO
                        </Link></li>
                        <li>
                            {isLoggedIn ? (
                              <NavProfile />
                            ) : (
                              <Link
                                className="nav-link link-dark"
                                aria-current="page"
                                to="/login"
                              >
                                  LOG IN
                              </Link>
                            )}
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default NavBar;
