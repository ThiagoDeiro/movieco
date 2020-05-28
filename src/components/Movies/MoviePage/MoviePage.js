import React, { useState, useEffect } from "react";

import Spinner from "../../../Ui/Spinner";
import "./MoviePage.css";
import axios from "axios";
import BeautyStars from "beauty-stars";
const MoviePage = (props) => {
  let getThisId = props.match.params.id;
  const [movieData, setMovieData] = useState([]);
  const error = false;
  useEffect(() => {
    const fetchData = async () => {
      const api_key = "dc9c1f8a8037bda70dfd05ce25d71cac";
      const response = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${getThisId}?api_key=${api_key}&append_to_response=videos,credits`
        )
        .catch(error);
      setMovieData(response.data);
    };
    fetchData();
  }, [getThisId, error]);
  console.log(movieData);

  let ALLDATA;

  if (movieData) {
    ALLDATA = movieData;
  }

  let movieTrailer;
  let movieGenres;
  let movieCast;
  let trailerKey;

  let listOfTrailers;
  let listOfGenres;
  let listOfCast;
  if (movieData) {
    listOfTrailers = ALLDATA.videos;
    listOfGenres = ALLDATA.genres;
    listOfCast = ALLDATA.credits;
  }
  console.log(listOfCast);
  if (listOfTrailers) {
    movieTrailer = listOfTrailers.results;
    trailerKey = movieTrailer.map((movie) => movie.key);
  }
  if (listOfGenres) {
    movieGenres = listOfGenres.map((movie) => movie.name);
  }
  if (listOfCast) {
    movieCast = listOfCast.cast;
  }

  if (movieCast) {
    let name = movieCast.map((movie) => movie.name);
    console.log(name);
  }
  if (!movieData) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="movie-page">
      <img
        className="movie-page__imageStyle"
        alt={ALLDATA.original_title}
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.6), 
          rgba(0, 0, 0, 0.6)) center center / 
          cover no-repeat, 
          url(https://image.tmdb.org/t/p/original${ALLDATA.backdrop_path}) center top 
          / cover no-repeat rgb(255, 255, 255)`,
        }}
      />
      <div className="movie-page-info">
        <h1>{ALLDATA.original_title}</h1>
        <div className="movie-page-info__genre">
          {listOfGenres ? (
            <span style={{ marginLeft: "-16px" }}>
              {movieGenres[0]} | {movieGenres[1]}
            </span>
          ) : (
            <span>Somenthing went wrong</span>
          )}

          <BeautyStars
            maxStars={10}
            value={ALLDATA.vote_average}
            size={"14px"}
            inactiveColor={"white"}
          ></BeautyStars>
        </div>
      </div>
      <div className="movie-page-review">
        <div className="movie-page-review-about">
          <img
            className="movie-page-review-about__poster"
            alt={ALLDATA.original_title}
            src={`https://image.tmdb.org/t/p/original${ALLDATA.poster_path}`}
          />
        </div>
        <div className="movie-page-review-about-main">
          <p>{ALLDATA.vote_average}</p>
          <p>{ALLDATA.overview}</p>
        </div>
      </div>
      <div className="movie-page-review-about-cast">
        {listOfCast ? (
          movieCast.map((cast) => {
            return (
              <div>
                {cast.profile_path !== null ? (
                  <img
                    style={{ width: "150px", height: "230px", padding: "20px" }}
                    src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                    alt={cast.name}
                  />
                ) : (
                  <div
                    style={{
                      width: "130px",
                      height: "230px",
                      padding: "20px",
                      border: "1px solid black",
                    }}
                  ></div>
                )}

                <span key={cast.cast_id}>{cast.name}</span>
                <p>{cast.character}</p>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
      <div>
        {listOfTrailers ? (
          <iframe
            title="movie"
            style={{ width: "420", height: "425" }}
            src={`https://www.youtube.com/embed/${trailerKey[0]}?controls=1`}
          ></iframe>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default MoviePage;
