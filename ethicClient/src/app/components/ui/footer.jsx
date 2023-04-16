import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="
      bg-dark
      text-light
      p-4
      d-flex
      justify-content-center"
    >
      <span className="m-1">&copy; 2022 Ethic-room</span>
      <a
        href="https://www.instagram.com/ethic_room/"
        className="m-1 link-light text-decoration-none"
      >Instagram</a>
      <Link
        to="/about"
        className="m-1 link-light text-decoration-none"
      >Contacts</Link>
    </footer>
  );
};
export default Footer;
