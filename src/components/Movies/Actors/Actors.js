import React, { useEffect, useState } from "react";
import Moment from "react-moment";

import { Link } from "react-router-dom";
import noImage from "../../../assets/images/noImage.png";
import PersonItem from "./personItem";
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

  console.log(perInfo);

  let date;
  let toFix;
  if (filmOf) {
    date = filmOf.map((date) => {
      // return <Moment format="dd-MMM-YYYY">{date.release_date}</Moment>;
    });
  }

  return (
    <div className="person">
      <div className="person-container">
        <div>
          <img
            alt={perInfo.id}
            src={`https://image.tmdb.org/t/p/original${perInfo.profile_path}`}
            style={{ height: "550px", borderRadius: "20px" }}
          ></img>
          <h1>Personal Info</h1>
          <h4>Known For</h4>
          <p>{perInfo.known_for_department}</p>
          <h4>Date of Birth</h4>
          <p>{perInfo.birthday}</p>
          <h4>Place of Birth</h4>
          <p>{perInfo.place_of_birth}</p>
        </div>
        <div className="person-container_overview">
          <h1>{perInfo.name}</h1>
          <p>{perInfo.biography}</p>
          <h2>Filmography</h2>
          <div className="person-container-card" id="style-4">
            {filmOf ? (
              filmOf.map((info) => {
                return (
                  <Link to={"/movie/" + info.id} key={info.id}>
                    {info.poster_path !== null ? (
                      <img
                        className="person-container-card__img"
                        src={`https://image.tmdb.org/t/p/original${info.poster_path}`}
                        alt={info.name}
                        key={info.id}
                      />
                    ) : (
                      <img
                        style={{
                          width: "150px",
                          height: "215px",
                          padding: "10px",
                        }}
                        alt={info.id}
                        src={noImage}
                        key={info.id}
                      ></img>
                    )}
                  </Link>
                );
              })
            ) : (
              <div></div>
            )}
          </div>
          <h1>Carrer</h1>
          <div className="person-container-card-list">
            {filmOf ? (
              filmOf.map((acting) => {
                return (
                  <PersonItem
                    key={acting.id}
                    date={acting.release_date}
                    name={acting.title}
                  />
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
