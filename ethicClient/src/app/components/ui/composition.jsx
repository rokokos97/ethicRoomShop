import React from "react";
import PropTypes from "prop-types";
const Composition = ({ composition }) => {
  if (composition) {
    composition.map((item, index) => (<p key={index}>{item}</p>));
  } else return "loading ...";
};
Composition.propTypes = {
  id: PropTypes.string
};
export default Composition;
