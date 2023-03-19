import React from 'react';
import {Card} from 'react-bootstrap';

const ItemListCard = () => {
  return (
    <>
      <Card style={{width: '18rem'}}>
        <Card.Img src='https://robohash.org/outwear?set=set5'/>
        <Card.Body>
          <Card.Title>
            Item name
          </Card.Title>
          <Card.Title>
            10000 UAH
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemListCard;
