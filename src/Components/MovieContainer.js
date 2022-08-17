import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import Search from "./Search";

function MovieContainer({movies}) {

  return (
    <div>
      <h1>Watchlist</h1>
      <Search />
      <br/>
      <Filter />
      <br/>
      <ul>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}  
      </ul>
    </div>
  );
}

export default MovieContainer;