import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem,
    value,
    onChange
}) => {
    return (
        <>
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {items.map((item) => (
                              <li
                                key={item[valueProperty]}
                                className="nav-item"
                                onClick={() => onItemSelect(item)}
                                role="button"
                              >
                                  <a
                                    className={
                                      "nav-link" +
                                      (item === selectedItem ? " active" : "")
                                    }
                                    href="#">{item[contentProperty]}</a>
                              </li>
                            ))}
                        </ul>
                        <form action="">
                            <input
                              type="text"
                              name="searchQuery"
                              placeholder="Search..."
                              onChange={onChange}
                              value={value}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
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
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default GroupList;
