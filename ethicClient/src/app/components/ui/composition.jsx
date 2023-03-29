import React from "react";
import PropTypes from "prop-types";
const Composition = ({ composition }) => {
  if (composition) {
    return composition.map((item, index) => (<p key={index}>{item}</p>));
  } else {
    return <p>loading ...</p>;
  }
};
Composition.propTypes = {
  composition: PropTypes.array
};
export default Composition;
