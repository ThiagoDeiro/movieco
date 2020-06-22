import React, { useState, useEffect } from "react";

import Spinner from "../../../Ui/Spinner";
import "./MoviePage.css";
import axios from "axios";
import BeautyStars from "beauty-stars";
import noImage from "../../../assets/images/noImage.png";
import ReviewCard from "../../../Ui/review/reviewCard";
import { Link } from "react-router-dom";
const MoviePage = (props) => {
  let getThisId = props.match.params.id;
  const [movieData, setMovieData] = useState([]);
  const error = false;

  const API_KEY = process.env.REACT_APP_MOVIE_KEY;
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${getThisId}?api_key=${API_KEY}&append_to_response=videos,credits,reviews`
        )
        .catch(error);
      setMovieData(response.data);
    };
    fetchData();
  }, [getThisId, error, API_KEY]);
  console.log(movieData);

  let ALLDATA;

  if (movieData) {
    ALLDATA = movieData;
  }

  let movieTrailer;
  let movieGenres;
  let movieCast;
  let trailerKey;
  let movieReview;

  let listOfTrailers;
  let listOfGenres;
  let listOfCast;
  let listOfReviews;
  if (movieData) {
    listOfTrailers = ALLDATA.videos;
    listOfGenres = ALLDATA.genres;
    listOfCast = ALLDATA.credits;
    listOfReviews = ALLDATA.reviews;
  }
  console.log(listOfReviews);
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
    // console.log(name);
  }

  if (listOfReviews) {
    movieReview = listOfReviews.results;
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

      <div className="movie-page-review">
        <div className="movie-page-review-about">
          <img
            className="movie-page-review-about__poster"
            alt={ALLDATA.original_title}
            src={`https://image.tmdb.org/t/p/original${ALLDATA.poster_path}`}
          />
        </div>
        <div className="movie-page-review-about-info">
          <h1>{ALLDATA.original_title}</h1>

          {listOfGenres ? (
            <span>
              {movieGenres[0]} | {movieGenres[1]}
            </span>
          ) : (
            <span>Somenthing went wrong</span>
          )}
          <div className="movie-page-review-about-info__rating">
            <BeautyStars
              maxStars={1}
              value={ALLDATA.vote_average}
              size={"16px"}
              inactiveColor={"white"}
            ></BeautyStars>
            <span style={{ paddingLeft: "10px" }}>{ALLDATA.vote_average}</span>
          </div>
          <p>{ALLDATA.overview}</p>
        </div>
      </div>
      <h1>CAST</h1>
      <div className="movie-page-review-about-cast scrollbar" id="style-4">
        {listOfCast ? (
          movieCast.map((cast) => {
            return (
              <Link
                to={"actor/" + cast.id}
                className="movie-page-review-about-cast__cards"
                key={movieCast.cast_id}
              >
                {cast.profile_path !== null ? (
                  <img
                    style={{ width: "150px", height: "215px", padding: "10px" }}
                    src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                    alt={cast.name}
                    key={movieCast.cast_id}
                  />
                ) : (
                  <img
                    style={{
                      width: "150px",
                      height: "215px",
                      padding: "10px",
                    }}
                    alt={cast.cast_id}
                    src={noImage}
                    key={movieCast.cast_id}
                  ></img>
                )}
                <span key={cast.cast_id}>{cast.name}</span>
                <p>{cast.character}</p>
              </Link>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
      <div className="movie-page-trailers">
        {listOfTrailers ? (
          movieTrailer.map((clip) => {
            return (
              <iframe
                title="movie"
                style={{
                  width: "430",
                  height: "435",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
                src={`https://www.youtube.com/embed/${clip.key}?controls=1`}
              ></iframe>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
      {listOfReviews ? (
        movieReview.map((review) => {
          return <ReviewCard title={review.author} content={review.content} />;
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default MoviePage;
