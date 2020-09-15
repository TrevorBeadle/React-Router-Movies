import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function Movie(props) {
  const [movie, setMovie] = useState();

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const saveMovie = () => {
    props.save(movie);
  };

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <MovieCard
        title={title}
        director={director}
        metascore={metascore}
        stars={stars}
      />
      <div className="save-button" onClick={saveMovie} key={movie}>
        Save
      </div>
    </div>
  );
}
