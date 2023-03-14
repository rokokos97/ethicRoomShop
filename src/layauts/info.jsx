import React from 'react';
import AccordionBox from '../components/accordionBox';

const Info = () => {
  return (
    <div className="text-center">
      <h1>
        PAYMENT AND DELIVERY
      </h1>
      <p className="text-lm">
        Is it necessary to choose a model or to expand?
      </p>
      <p>
        Phone for tel. +380937730930,
        or write to us at
        <a className="link-dark" href="mailto:Ethickyiv@gmail.com">
        Ethickyiv@gmail.com</a>
      </p>
      <AccordionBox/>
    </div>
  );
};

export default Info;
