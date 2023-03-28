import React from "react";

import img from "../images/aboutUs01.png";
import { Image } from "react-bootstrap";
import Footer from "../components/footer";

const About = () => {
  return (
    <>
      <Image src={img} alt="hot girl on the table" fluid/>
      <div className="w-75 mx-auto">
        <h2 className="text-center">About us</h2>
        <div
          className="w-75 lh-lg py-lg-3 mx-auto text-start text-secondary text"
        >
          <p className="">
            We are a Kyiv-based brand of minimalist clothing,
            inspired by the simplicity of nature and eastern art.
            The main principle of ETHIC is zero waste,
            the choice of pleasant to the touch,
            durable and environmentally friendly fabrics.
          </p>
          <p>
            Our goal is to make things versatile - wear the same thing to work,
            to a party, or just casually. We call our style
            &apos;the upper underground&apos;.
            At the moment, we are most concerned about the war in Ukraine.
            In ETHIC range you can find a T-shirt
            with the emblem of the Kyiv metro,
            as a symbol of the place that saved many lives during
            the invasion of Kyiv.
            And a t-shirt with a smile in the colors of the Ukrainian flag,
            which demonstrates the bright soul and resilience of our people.
            ETHIC customers always receive a convenient shopping bag or
            a reusable zippered bag as a package.
          </p>
          <p>
            Despite the war, we continue to make products in Kyiv
            and send them to our girls all over the world.
          </p>
        </div>
      </div>
      <div className="text-center bg-secondary bg-opacity-25 p-3">
        <p>Do you have any questions? Write to us:</p>
        <p>E-mail: ethicroom@gmail.com</p>
        <p>Tel: +380 99 752 0346</p>
        <p>Social: <a className="link-dark" href="https://www.instagram.com/ethic_room/" >Instagram</a></p>
      </div>
      <Footer/>
    </>
  );
};

export default About;
