import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getIsLoggedIn, getUser } from "../../store/user";
const NavProfile = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const [isOpen, setOpen] = useState(false);
    const user = useSelector(getUser());
    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };
    if (!isLoggedIn && !user) return "";
    return (
        <div className="dropdown" onClick={toggleMenu}>
            <div className="btn dropdown-toggle d-flex align-items-center">
                <div className="me-2">user name</div>
            </div>
            <div className={"w-100 dropdown-menu" + (isOpen ? " show" : "")}>
                {/* <Link */}
                {/*     to={`/users/${currentUser._id}`} */}
                {/*     className="dropdown-item" */}
                {/* > */}
                {/*     Profile */}
                {/* </Link> */}
                <Link to="/logout" className="dropdown-item">
                    Log Out
                </Link>
            </div>
        </div>
    );
};
export default NavProfile;
