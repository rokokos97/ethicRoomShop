import React from "react";
import PropTypes from "prop-types";

const SearchLine = ({
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
    </>
  );
};
SearchLine.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  initialSort: PropTypes.string,
  onSort: PropTypes.func
};

export default SearchLine;
