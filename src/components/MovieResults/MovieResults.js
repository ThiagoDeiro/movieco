import React from "react";

import "./MovieResults.css";
const MovieResults = (props) => {
  let MovieData;
  let MovieRes;
  if (props) {
    MovieData = props.data;
  }
  if (MovieData) {
    MovieRes = MovieData.results;
  }
  console.log(MovieRes);
  return (
    <div className="movie-result">
      <div className="movie-results-content">
        {MovieRes ? (
          MovieRes.map((movie) => {
            return (
              <img
                style={{ width: "150px", height: "215px", padding: "20px" }}
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                key={movie.id}
              ></img>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default MovieResults;
