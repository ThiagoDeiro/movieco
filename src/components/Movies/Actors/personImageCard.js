import React from "react";

import "./personImageCard.css";
const PersonImageCard = (props) => (
  <div>
    <img
      alt={props.alt}
      src={props.src}
      style={{ height: "550px", borderRadius: "20px" }}
    ></img>
    <h1>Personal Info</h1>
    <h4>Known For</h4>
    <p>{props.departament}</p>
    <h4>Date of Birth</h4>
    <p>{props.birthday}</p>
    <h4>Place of Birth</h4>
    <p>{props.place}</p>
  </div>
);

export default PersonImageCard;
