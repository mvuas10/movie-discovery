import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
          to="/"
          exact
        >
          Home
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "green",
          }}
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
      <header className="App-header">
        <Switch>
          <Route path="/movies/:imdbID">
            <MovieDetails />
          </Route>
          <Route exact path="/movies">
            <MovieList />
          </Route>
          <Route path="/">
            <h1>Welcome to my app, stay!</h1>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
