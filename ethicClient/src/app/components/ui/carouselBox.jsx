import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

const CarouselBox = () => {
  return (
    <>
      <Carousel
        fade
        className="carousel"
      >
        <CarouselItem>
          <img
            src={`http://localhost:8080/api/upload/main1.png`}
            className="d-block w-100"
            alt="girl on the table"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src={`http://localhost:8080/api/upload/main2.png`}
            className="d-block w-100"
            alt="girls"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src={`http://localhost:8080/api/upload/main3.png`}
            className="d-block w-100"
            alt="girl on stairs"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src={`http://localhost:8080/api/upload/main4.png`}
            className="d-block w-100"
            alt="girls"
          />
        </CarouselItem>
      </Carousel>
    </>
  );
};

export default CarouselBox;
