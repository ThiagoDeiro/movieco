import React from "react";
import { Link } from "react-router-dom";
import noImg from "../../assets/images/noImage.png";
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
      {/* <h1>Search</h1> */}
      <div className="movie-results-content">
        {MovieRes ? (
          MovieRes.map((movie) => {
            return movie.poster_path !== null ? (
              <Link to={"/movie/" + movie.id} key={movie.id}>
                <img
                  style={{
                    width: "150px",
                    height: "215px",
                    paddingLeft: "60px",
                    marginTop: "30px",
                  }}
                  alt={movie.title}
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                ></img>
              </Link>
            ) : (
              <Link to={"/movie/" + movie.id} key={movie.id}>
                <img
                  style={{
                    width: "150px",
                    height: "215px",
                    marginLeft: "60px",
                    marginTop: "30px",
                  }}
                  alt={movie.title}
                  src={noImg}
                ></img>
                {/* <span>{movie.title}</span> */}
              </Link>
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
