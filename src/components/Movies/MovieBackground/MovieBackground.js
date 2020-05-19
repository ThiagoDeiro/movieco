import React from "react";

import backUp from "../../../assets/images/movie.jpg";
import "./MovieBackground.css";
const MovieBackground = (props) => {
  return (
    <div className="imageContainer">
      > <img className="mainBackground" src={backUp} alt="" />
    </div>
  );
};

export default MovieBackground;
