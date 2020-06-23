import React from "react";

import "./MovieGalleryItem.css";
import { Link } from "react-router-dom";
const MovieGalleryItem = (props) => {
  console.log(props);
  let MovieData = props.item;
  let popularity = MovieData.map((page) => {
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
    <div className="movie-container ">
      <div className="movie-container-list scrollbar" id="style-4">
        {popularity}
      </div>
    </div>
  );
};

export default MovieGalleryItem;
