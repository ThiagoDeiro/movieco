import React, { useState, useEffect } from "react";

import "./MoviePage.css";
import axios from "axios";
import BeautyStars from "beauty-stars";
const MoviePage = (props) => {
  let getThisId = props.match.params.id;
  const [video, setVideo] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [genres, setGenres] = useState([]);
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const api_key = "dc9c1f8a8037bda70dfd05ce25d71cac";
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${getThisId}?api_key=${api_key}&append_to_response=videos,credits`
      );

      setVideo(response.data);
      setTrailer(response.data.videos.results);
      setGenres(response.data.genres);
      setCast(response.data.credits.cast);
    };
    fetchData();
  }, [getThisId]);
  // console.log(video);
  // console.log(genres);
  // console.log(cast);

  const itrailer = trailer.map((movie) => movie.key);
  const movieGenres = genres.map((gen) => gen.name);

  // console.log(movieGenres);
  return (
    <div className="movie-page">
      <img
        className="movie-page__imageStyle"
        alt={video.original_title}
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.6), 
          rgba(0, 0, 0, 0.6)) center center / 
          cover no-repeat, 
          url(https://image.tmdb.org/t/p/original${video.backdrop_path}) center top 
          / cover no-repeat rgb(255, 255, 255)`,
        }}
      />
      <div className="movie-page-info">
        <h1>{video.original_title}</h1>
        <div className="movie-page-info__genre">
          <span style={{ marginLeft: "-16px" }}>
            {movieGenres[0]} | {movieGenres[1]}
          </span>
          <BeautyStars
            maxStars={10}
            value={video.vote_average}
            size={"14px"}
            inactiveColor={"white"}
          ></BeautyStars>
        </div>
      </div>
      <div className="movie-page-review">
        <div className="movie-page-review-about">
          <img
            className="movie-page-review-about__poster"
            alt={video.original_title}
            src={`https://image.tmdb.org/t/p/original${video.poster_path}`}
          />
        </div>
        <div className="movie-page-review-about-main">
          <p>{video.vote_average}</p>
          <p>{video.overview}</p>
        </div>
      </div>
      <div>
        <iframe
          title="movie"
          style={{ width: "420", height: "425" }}
          src={`https://www.youtube.com/embed/${itrailer[0]}?controls=1`}
        ></iframe>
      </div>
    </div>
  );
};

export default MoviePage;
