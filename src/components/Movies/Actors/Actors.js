import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import "./Actors.css";
const Actors = (props) => {
  const cast_id = props.match.params.id;
  const [actor, setActor] = useState([]);
  const error = false;
  //   console.log(cast_id);
  const API_KEY = process.env.REACT_APP_MOVIE_KEY;
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(
          `https://api.themoviedb.org/3/person/${cast_id}?api_key=${API_KEY}&append_to_response=movie_credits`
        )
        .catch(error);
      setActor(response.data);
    };
    fetchData();
  }, [cast_id, error, API_KEY]);

  let perInfo;

  let movieCredits;
  let filmOf;
  if (actor) {
    perInfo = actor;
    movieCredits = actor.movie_credits;
  }
  if (movieCredits) {
    filmOf = movieCredits.cast;
  }

  console.log(filmOf);

  return (
    <div className="actorBlock">
      <div className="actorBlock-personInfo">
        <div className="actorBlock-personInfo_card">
          <img
            alt={perInfo.id}
            src={`https://image.tmdb.org/t/p/original${perInfo.profile_path}`}
            style={{ height: "550px", borderRadius: "20px" }}
          ></img>
          <h1>Personal Info</h1>
          <h4>Know For</h4>
          <span>{perInfo.known_for_department}</span>
          <h4>Place of Birth</h4>
          <span>{perInfo.place_of_birth}</span>
          <h4>Date of Birth</h4>
          <span>{perInfo.birthday}</span>
        </div>
        <div className="position">
          <div className="actorBlock-personInfo_card_details">
            <h1>{perInfo.name}</h1>
            <h3>Biography</h3>
            <p>{perInfo.biography}</p>
            <h4>Filmography</h4>
          </div>
          <div
            className="actorBlock-personInfo_card_details_movies_order"
            id="style-4"
          >
            {filmOf ? (
              filmOf.map((info) => {
                return (
                  <Link>
                    <img
                      alt={info.title}
                      src={`https://image.tmdb.org/t/p/original${info.poster_path}`}
                      style={{
                        width: "150px",
                        height: "255px",
                        padding: "10px",
                      }}
                    />
                  </Link>
                );
              })
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actors;
