import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import Search from "./Search";

function MovieContainer({ movies }) {
  const [selectedGenre, setSelectedGenre] = useState("")
  const [searchTitle, setSearchTitle] = useState("")

  function handleGenreChange(genre) {
    setSelectedGenre(genre)
  }

  function handleSearch(search) {
    setSearchTitle(search)
  }

  const movieFilter = movies.filter((movie) => {
      if (selectedGenre === "" && searchTitle === "") {
        return movie;
      }
      else if (movie.genre === selectedGenre && movie.title.toLowerCase().includes(searchTitle.toLowerCase())) {
        return movie;
      }
  })

  return (
    <div>
      <h1>Watchlist</h1>
      <Search search={searchTitle} onSearch={handleSearch}/>
      <br/>
      <Filter genre={selectedGenre} onGenreChange={handleGenreChange}/>
      <br/>
      <ul>
        {movieFilter.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}  
      </ul>
    </div>
  );
}

export default MovieContainer;