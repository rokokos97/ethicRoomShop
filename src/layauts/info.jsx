import React from 'react';
import AccordionBox from '../components/accordionBox';

const Info = () => {
  return (
    <div className="text-center w-75 mx-auto">
      <h1 className="m-5">
        PAYMENT AND DELIVERY
      </h1>
      <p>
        Is it necessary to choose a model or to expand?
      </p>
      <p>
        Phone for tel. +380937730930, or write to us at <a
          className="link-dark"
          href="mailto:Ethickyiv@gmail.com"
        >
        Ethickyiv@gmail.com</a>
      </p>
      <div className="mt-3">
        <AccordionBox/>
      </div>
    </div>
  );
};

export default Info;
