import React from "react";
import { Accordion } from "react-bootstrap";

const AccordionBox = () => {
  return (
    <>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Payment Methods</Accordion.Header>
          <Accordion.Body>
            <div className="text-start">
              <p>
                You can get excited:
              </p>
              <div className="text-secondary">
                <p>
                  - Сredit card<br/>
                  - PayPal<br/>
                  - Privat24<br/>
                </p>
                <p>
                  All bookings are processed within 1-2 business days after
                  payment is received. The term of delivery includes
                  only working days due to holidays,
                  national and sovereign holidays, and force majeure conditions.
                </p>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Shipping Methods</Accordion.Header>
          <Accordion.Body>
            <div className="text-start">
              <p>
                We offer the following ways to deliver your purchase worldwide:
              </p>
              <p>
                Ukraine<br/>
                <span className="text-secondary">
                  Free delivery by Nova Poshta service.
                </span>
              </p>
              <p>Other methods <br/>
                <span className="text-secondary">
                  Standard delivery Ukrposhta. Shipping cost - $ 15.
                  Approximate delivery time - from 7 to 21 working days.
                </span>
              </p>
              <p>Dhl Express Worldwide <br/>
                <span className="text-secondary">
                  Shipping cost - $ 30.
                  Approximate delivery time - 1-2 working days.
                </span>
              </p>
              <p>Important information <br/>
                <span className="text-secondary">
                  All orders are shipped on the basis of DDU
                  (Delivery Duty Unpaid),
                  which means that your order may be subject to local taxes
                  and / or import duties levied by your local customs
                  authorities.
                  Product prices are shown without all taxes and fees.
                  We are unable to calculate the exact amount of duties
                  and taxes that your order may require,
                  as these fees are charged directly by the country of delivery.
                </span>
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Return and Exchange</Accordion.Header>
          <Accordion.Body>
            <p className="text-secondary text-startd">
              Items can be returned in full or in part for replacement size,
              color or for return within 14
              working days of receiving the parcel.
              Items must be returned in their original condition without damage.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default AccordionBox;
