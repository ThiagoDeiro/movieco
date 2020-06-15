import React, { useState } from "react";

import "./Input.css";
import axios from "axios";
const Input = (props) => {
  const [value, setValue] = useState("");
  const [data, setMovies] = useState([]);
  const searchValueHandler = (e) => {
    setValue(e.target.value);
    // console.log(e.target.value);
  };
  const searchHandler = async () => {
    const api_key = "dc9c1f8a8037bda70dfd05ce25d71cac";
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${value}`
    );
    setMovies(response.data.results);
  };
  // console.log(data);

  const maps = data.map((movie) => {
    return <p>{movie.original_title}</p>;
  });

  console.log(maps);

  return (
    <React.Fragment>
      <input
        className="searchInput"
        type="text"
        value={value}
        onChange={searchValueHandler}
      />
      <a
        href="/#"
        className="action-button shadow animate red"
        type="submit"
        onClick={searchHandler}
      >
        Search
      </a>
      {maps}
    </React.Fragment>
  );
};

export default Input;
