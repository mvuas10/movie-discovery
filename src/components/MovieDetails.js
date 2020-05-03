import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const routeParameters = useParams();
  console.log(routeParameters);

  useEffect(() => {
    async function fetchMovieById(imdbID) {
      console.log("DO I have any ID?", imdbID);
      const response = await axios.get(
        `http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=bca332d`
      );
      console.log("test response: ", response.data);
      setMovie(response.data);
    }
    fetchMovieById(routeParameters.imdbID);
  }, []);
  return (
    <div>
      <Link to="/movies">See all movies</Link>
      <div>
        <img src={movie.Poster} />
        <p>{movie.Plot}</p>
      </div>
    </div>
  );
}
