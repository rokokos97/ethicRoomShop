import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem,
    onClear
}) => {
    return (
        <nav className="navbar w-75 mx-auto ">
            <div className="container-fluid justify-content-center">
                <ul className="nav flex-nowrap">
                    {items.map((item) => (
                      <li
                        key={item[valueProperty]}
                        className="nav-item "
                        onClick={() => onItemSelect(item)}
                        role="button"
                      >
                          <a
                            className={
                              "link-dark nav-link" +
                              (item === selectedItem ? " active" : "")
                          }
                            href="#">{item[contentProperty].toUpperCase()}</a>
                      </li>
                    ))}
                </ul>
                <span
                  role="button"
                  onClick={() => { onClear(); }}
                >
                      ALL GOODS
                </span>
            </div>
        </nav>
    );
};
GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};
GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object,
    onClear: PropTypes.func
};

export default GroupList;
