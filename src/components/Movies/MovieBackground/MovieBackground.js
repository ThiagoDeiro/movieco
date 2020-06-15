import React from "react";

import back from "../../../assets/images/back.jpeg";
import Input from "../../../Ui/Input";
import "./MovieBackground.css";
const MovieBackground = (props) => {
  return (
    <div className="banner">
      <img className="mainBackground" src={back} alt="" />
      <div className="banner-text">
        <h1>Search </h1>
        <Input />
      </div>
    </div>
  );
};

export default MovieBackground;
