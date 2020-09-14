import React, { useState, useEffect } from "react";
import axios from "axios";

import SavedList from "./Movies/SavedList";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Movie from "./Movies/Movie";
import MovieList from "./Movies/MovieList";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then((response) => {
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (id) => {
    setSaved((saved) => [...saved, id]);
  };

  return (
    <div>
      <SavedList list={saved} />
      <Switch>
        <Route path="/movies/:id">
          <Movie save={addToSavedList} />
        </Route>
        <Route path="/">
          <MovieList movies={movieList} />
        </Route>
      </Switch>
    </div>
  );
}
