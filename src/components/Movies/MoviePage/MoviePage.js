import React, { useState, useEffect } from "react";

import axios from "axios";
const MoviePage = (props) => {
  let getThisId = props.match.params.id;
  const [video, setVideo] = useState([]);
  const [trailer, setTrailer] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const api_key = "dc9c1f8a8037bda70dfd05ce25d71cac";
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${getThisId}?api_key=${api_key}&append_to_response=videos,credits`
      );
      setVideo(response.data);
      setTrailer(response.data.videos.results);
    };
    fetchData();
  }, [getThisId]);
  console.log(video);

  const itrailer = trailer.map((movie) => movie.key);

  console.log(itrailer[0]);
  return (
    <div style={{ margin: "100px" }}>
      <img
        alt={video.original_title}
        style={{ width: "150px", height: "230px" }}
        src={`https://image.tmdb.org/t/p/original${video.poster_path}`}
      />
      <p>{video.original_title}</p>
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
