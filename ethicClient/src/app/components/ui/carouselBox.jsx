import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import carousel1 from "../../images/main1.png";
import carousel2 from "../../images/main2.png";
import carousel3 from "../../images/main3.png";
import carousel4 from "../../images/main4.png";

const CarouselBox = () => {
  return (
    <>
      <Carousel
        fade
        className="carousel"
      >
        <CarouselItem>
          <img
            src={carousel1}
            className="d-block w-100"
            alt="girl on the table"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src={carousel4}
            className="d-block w-100"
            alt="girls"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src={carousel2}
            className="d-block w-100"
            alt="girl on stairs"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src={carousel3}
            className="d-block w-100"
            alt="girls"
          />
        </CarouselItem>
      </Carousel>
    </>
  );
};

export default CarouselBox;
