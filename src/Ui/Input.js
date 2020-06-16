import React, { useState } from "react";

import "./Input.css";
const Input = (props) => {
  const [value, setValue] = useState("");
  const searchValueHandler = (e) => {
    setValue(e.target.value);
    // console.log(e.target.value);
  };
  const searchHandler = async () => {
    window.location.href = "/results/" + value;
  };
  return (
    <React.Fragment>
      <input
        className="searchInput"
        type="text"
        value={value}
        onChange={searchValueHandler}
      />
      <button
        className="action-button shadow animate red"
        type="submit"
        onClick={searchHandler}
      >
        Search
      </button>
    </React.Fragment>
  );
};

export default Input;
