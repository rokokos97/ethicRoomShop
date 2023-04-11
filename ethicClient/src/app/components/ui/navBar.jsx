import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { getIsLoggedIn } from "../../store/user";
import NavProfile from "./navProfile";
const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    return (
        <nav className="navbar bg-light mb-3">
               <div className="container-fluid">
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink className="nav-link link-dark " aria-current="page" to="/">
                            <h3>ETHIC</h3>
                        </NavLink>
                    </li>
                </ul>
                <div className="d-flex">
                    <ul className="nav">
                        {isLoggedIn &&
                          <li className="nav-item">
                            <NavLink className="nav-link link-dark " aria-current="page" to="/addItem">
                                ADD NEW ITEM
                            </NavLink>
                          </li>
                        }
                        <li className="nav-item"><NavLink
                          className="nav-link link-dark"
                          aria-current="page"
                          to="/items"
                        >
                            CATALOGUE
                        </NavLink></li>
                        <li className="nav-item"><NavLink
                          className="nav-link link-dark"
                          aria-current="page"
                          to="/about"
                        >
                            ABOUT US
                        </NavLink></li>
                        <li className="nav-item"><NavLink
                          className="nav-link link-dark"
                          aria-current="page"
                          to="/info"
                        >
                            INFO
                        </NavLink></li>
                        <li>
                            {isLoggedIn ? (
                              <NavProfile />
                            ) : (
                              <NavLink
                                className="nav-link link-dark"
                                aria-current="page"
                                to="/login"
                              >
                                  LOG IN
                              </NavLink>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
