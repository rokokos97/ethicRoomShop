import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-bootstrap';
import config from '../../config.json';
const ItemCard = ({item}) => {
  return (
    <div>
      <div>
        <Image fluid src={`${config.apiEndpoint}${item.image}`}/>
      </div>
      <div className="d-flex flex-column align-items-center
       text-center position-relative">
        <div className="mt-1">
          <h4>{item.name}</h4>
          <h4 className="mb-1">
            {`${item.price} uah`}
          </h4>
        </div>
      </div>
    </div>
  );
};
ItemCard.propTypes = {
  item: PropTypes.object,
};

export default ItemCard;
