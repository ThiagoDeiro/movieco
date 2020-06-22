import React, { useEffect, useState } from "react";

import axios from "axios";
const Actors = (props) => {
  const cast_id = props.match.params.id;
  const [actor, setActor] = useState([]);
  const error = false;
  console.log(cast_id);
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
  console.log(actor);
  return (
    <div>
      <p>Hi</p>
    </div>
  );
};

export default Actors;
