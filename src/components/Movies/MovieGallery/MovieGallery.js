import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import MovieBackground from "../MovieBackground/MovieBackground";
import "./MovieGallery.css";
const MovieGallery = (props) => {
  const [data, setMovie] = useState([]);

  const API_KEY = process.env.REACT_APP_MOVIE_KEY;
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`
      );
      setMovie(response.data.results);
    };
    fetchData();
  }, []);

  // console.log(data);

  let popularity = data.map((page) => {
    return (
      <Link to={"/movie/" + page.id} key={page.id} className="mobile">
        <img
          className="formobile"
          alt={page.original_title}
          src={`https://image.tmdb.org/t/p/original${page.poster_path}`}
        />
      </Link>
    );
  });
  return (
    <div className="container">
      <MovieBackground />
      <h1>Most Popular Movies</h1>
      <div className="movie-container">
        <div className="movie-container-list">{popularity}</div>
      </div>
    </div>
  );
};

export default MovieGallery;
