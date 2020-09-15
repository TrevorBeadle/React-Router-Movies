import React from "react";
import { useHistory, Link, useRouteMatch } from "react-router-dom";

export default function SavedList(props) {
  const history = useHistory();

  const routeToHome = () => {
    history.push("/");
  };

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie) => (
        <span className="saved-movie" key={movie.title}>
          {movie.title}
        </span>
      ))}
      <div className="home-button" onClick={routeToHome}>
        Home
      </div>
    </div>
  );
}
