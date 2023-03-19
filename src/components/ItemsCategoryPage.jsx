import React from 'react';
import PropTypes from 'prop-types';
import ItemListCard from './itemListCard';
const ItemsCategoryPage = () => {
  return (
    <>
      <div className="w-75 mx-auto m-5">
        <ItemListCard/>
      </div>
    </>
  );
};
ItemsCategoryPage.propTypes = {
  id: PropTypes.string,
};
export default ItemsCategoryPage;
