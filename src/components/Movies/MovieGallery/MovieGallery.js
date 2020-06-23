import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import MovieBackground from "../MovieBackground/MovieBackground";
import MovieGalleryItem from "./MovieGalleryItem";
import "./MovieGallery.css";
const MovieGallery = (props) => {
  const [data, setMovie] = useState([]);

  const API_KEY = process.env.REACT_APP_MOVIE_KEY;
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&sort_by=popularity.desc&`
      );
      setMovie(response.data.results);
    };
    fetchData();
  }, [API_KEY]);

  return (
    <div className="container">
      <MovieBackground />
      <h1>Top Rated Movies</h1>
      <MovieGalleryItem item={data} />
    </div>
  );
};

export default MovieGallery;
