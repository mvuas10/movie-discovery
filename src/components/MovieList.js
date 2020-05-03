import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [appState, setAppState] = useState("idle");

  async function fetchMovies(userInputToSearch) {
    console.log(userInputToSearch);
    setAppState("searching...");
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${userInputToSearch}&apikey=bca332d`
    );
    console.log("Fetch data: ", response.data.Search);
    setMovies(response.data.Search);
    setAppState("done");
  }
  useEffect(() => {
    // fetchMovies("indiana jones");
  }, []);

  console.log("movies test: ", movies);
  if (appState === "searching...") {
    return <h1>Searching movies</h1>;
  }
  return (
    <div>
      <label>Search</label>
      <input
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <button onClick={() => fetchMovies(searchTerm)}>search</button>
      {movies.map((movie) => {
        console.log("map test: ", movie);
        return (
          <div>
            <p>{appState}</p>
            <h4>{movie.Title}</h4>
            <img src={movie.Poster} />
            <Link to={`/movies/${movie.imdbID}`}>View details</Link>
          </div>
        );
      })}
    </div>
  );
}
