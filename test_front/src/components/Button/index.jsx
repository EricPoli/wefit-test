import PropTypes from "prop-types";
import React from "react";
import "./style.scss";

export default function Button({ children, handleClick }) {
  return (
    <button className="btn" onClick={handleClick}>
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};
