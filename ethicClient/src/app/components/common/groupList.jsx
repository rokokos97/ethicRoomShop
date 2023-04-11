import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem,
    value,
    onChange,
    initialSort,
    onSort
}) => {
    return (
        <>
            <div className="input-group w-75 flex-nowrap mx-auto">
                    <input
                      className="form-control"
                      type="text"
                      name="searchQuery"
                      placeholder="Search..."
                      onChange={onChange}
                      value={value}
                    />
                <span className="input-group-text" id="addon-wrapping">
                    <i
                      className={`bi bi-sort-${(initialSort === "asc") ? "up" : "down"}`}
                      role="button"
                      onClick={() => { onSort(initialSort); }}
                    ></i>
                </span>
            </div>
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
                </div>
            </nav>
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
    onChange: PropTypes.func,
    initialSort: PropTypes.string,
    onSort: PropTypes.func
};

export default GroupList;
