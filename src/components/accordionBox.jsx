import React from 'react';
import {Accordion} from 'react-bootstrap';

const AccordionBox = () => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Payment Methods</Accordion.Header>
          <Accordion.Body>
            You can get excited:
            - Сredit card
            - PayPal
            - Privat24
            All bookings are processed within 1-2 business days after payment
            is received. The term of delivery includes only working days due to
            holidays, national and sovereign holidays,
            and force majeure conditions.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Shipping Methods</Accordion.Header>
          <Accordion.Body>
            We offer the following ways to deliver your purchase worldwide:

            Ukraine
            Free delivery by Nova Poshta service.

            Other methods
            Standard delivery Ukrposhta. Shipping cost - $ 15.
            Approximate delivery time - from 7 to 21 working days.

            Dhl Express Worldwide
            Shipping cost - $ 30.
            Approximate delivery time - 1-2 working days.

            Important information
            All orders are shipped on the basis of DDU (Delivery Duty Unpaid),
            which means that your order may be subject to local taxes
            and / or import duties levied by your local customs authorities.
            Product prices are shown without all taxes and fees.
            We are unable to calculate the exact amount of duties
            and taxes that your order may require,
            as these fees are charged directly by the country of delivery.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Return and Exchange</Accordion.Header>
          <Accordion.Body>
            Items can be returned in full or in part for replacement size,
            color or for return within 14 working days of receiving the parcel.
            Items must be returned in their original condition without damage.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default AccordionBox;
