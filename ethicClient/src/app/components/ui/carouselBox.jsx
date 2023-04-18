import React from 'react';
import {Carousel, CarouselItem} from 'react-bootstrap';
import config from '../../config.json';

const CarouselBox = () => {
  return (
    <>
      <Carousel
        fade
        className="carousel"
      >
        <CarouselItem>
          <img
            src={`${config.apiEndpoint}/upload/main1.png`}
            className="d-block w-100"
            alt="girl on the table"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src={`${config.apiEndpoint}/upload/main2.png`}
            className="d-block w-100"
            alt="girls"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src={`${config.apiEndpoint}/upload/main3.png`}
            className="d-block w-100"
            alt="girl on stairs"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src={`${config.apiEndpoint}/upload/main4.png`}
            className="d-block w-100"
            alt="girls"
          />
        </CarouselItem>
      </Carousel>
    </>
  );
};

export default CarouselBox;
