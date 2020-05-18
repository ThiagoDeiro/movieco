import React from "react";

import backUp from "../../../assets/images/movie.jpg";

const MovieBackground = (props) => {
  return (
    <div>
      >{" "}
      <img
        src={backUp}
        style={{
          width: "100%",
          height: "90vh",
        }}
        alt=""
      />
    </div>
  );
};

export default MovieBackground;
