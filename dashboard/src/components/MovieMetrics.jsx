import React from "react";
import ContentRowMovies from "./ContentRowMovies";
const movieMetrics = [
  {
    title: "Movies In Data Base",
    value: 21,
    color: "primary",
    icon: "fa-film",
  },
  {
    title: "Total Awards",
    value: 79,
    color: "success",
    icon: "fa-award",
  },
  {
    title: "Actors Quantity",
    value: 49,
    color: "warning",
    icon: "fa-user",
  },
];
function MovieMetrics() {
  return (
    <div className="row">
      {movieMetrics.map((movieMetric, i) => {
        return (
          <ContentRowMovies
            title={movieMetric.title}
            value={movieMetric.value}
            color={movieMetric.color}
            icon={movieMetric.icon}
            key={i + "movieMetric"}
          ></ContentRowMovies>
        );
      })}
    </div>
  );
}

export default MovieMetrics;
