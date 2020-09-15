import React from "react";
import { useHistory, NavLink } from "react-router-dom";

export default function SavedList(props) {
  const history = useHistory();

  const routeToHome = () => history.push("/");

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie) => (
        <NavLink
          to={`/movies/${movie.id}`}
          activeStyle={{ color: "red" }}
          key={movie.title}
        >
          <span className="saved-movie">{movie.title}</span>
        </NavLink>
      ))}
      <div className="buttons">
        <div className="clear-button" onClick={props.clear}>
          Clear
        </div>
        <div className="home-button" onClick={routeToHome}>
          Home
        </div>
      </div>
    </div>
  );
}
