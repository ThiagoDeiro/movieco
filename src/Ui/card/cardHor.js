import React from "react";

import { Link } from "react-router-dom";
import "./cardHor.css";
const cardHor = (props) => {
  return (
    <div className="card-container-list scrollbar" id="style-4">
      {props.children}
    </div>
  );
};

export default cardHor;
