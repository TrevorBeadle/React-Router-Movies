import React from "react";
import { useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  const history = useHistory();

  const routeDescription = () => {
    history.push(`/movies/${props.movie.id}`);
  };

  return (
    <MovieCard
      title={title}
      director={director}
      metascore={metascore}
      onClick={routeDescription}
    />
  );
}
