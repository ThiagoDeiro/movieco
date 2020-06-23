import React from "react";

import "./personItem.css";
const PersonItem = (props) => (
  <div className="personItem">
    <span>{props.date}</span>
    <span>{props.name}</span>
  </div>
);

export default PersonItem;
