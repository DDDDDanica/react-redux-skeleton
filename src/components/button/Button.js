import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const { className, label, ...restProps } = props;
  const classDefault = "";
  return (
    <div
      {...restProps}
      className={`btn flex-center ${classDefault} ${className}`}
    >
      {label && <span>{label}</span>}
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string
};

export default Button;
