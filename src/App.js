import MovieContainer from "./Components/MovieContainer";
import MovieForm from "./Components/MovieForm";
import Home from "./Components/Home";
import './App.css';
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";


function App() {
  const [movies, setMovies] =useState([])

  useEffect(() => {
    fetch("http://localhost:3001/movies")
    .then(r => r.json())
    .then(data => setMovies(data))
  }, [])

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<MovieContainer movies={movies}/>}/>
        <Route path="/movies/new" element={<MovieForm movies={movies}/>}/>
      </Routes>
    </div>
  );
}

export default App;