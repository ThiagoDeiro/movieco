import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieResults from "../components/MovieResults/MovieResults";
const Resultpage = (props) => {
  const searchParams = props.match.params.params;
  // console.log(searchParams);
  const [data, setMovies] = useState([]);
  const error = false;
  useEffect(() => {
    const fetchData = async () => {
      const api_key = "dc9c1f8a8037bda70dfd05ce25d71cac";
      const response = await axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchParams}`
        )
        .catch(error);
      setMovies(response.data);
    };
    fetchData();
  }, [searchParams, error]);
  // console.log(data);

  let getData;

  if (data) {
    getData = data;
  }

  return (
    <div>
      {/* <h1 style={{ marginTop: "100px" }}>Results for {searchParams}</h1> */}
      <MovieResults data={getData} />
    </div>
  );
};
export default Resultpage;
