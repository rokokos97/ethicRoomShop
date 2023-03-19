import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';

const ItemCompositionList = ({itemsArr}) => {
  return (
    <>
      <div>
        <Card>
          {
            itemsArr && itemsArr.map((item) => <img src={item.imgURL} alt=""/>)
          }
        </Card>
      </div>

    </>
  );
};
ItemCompositionList.propTypes = {
  itemsArr: PropTypes.array,
};
export default ItemCompositionList;
