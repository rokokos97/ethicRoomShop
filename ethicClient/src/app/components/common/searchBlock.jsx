import React from 'react';
import PropTypes from 'prop-types';

const SearchLine = ({
  value,
  onChange,
  initialSort,
  onSort,
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
      </div>
    </>
  );
};
SearchLine.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  initialSort: PropTypes.string,
  onSort: PropTypes.func,
};
export default SearchLine;
