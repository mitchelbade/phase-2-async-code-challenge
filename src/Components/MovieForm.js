import React, { useState, useEffect } from "react";

function MovieForm({ movies, onAddMovie }) {
  const [ newMovie, setNewMovie ] = useState({
    title: "",
    description: "",
    genre: "",
    watched: false,
    image: ""
  })

  function handleSubmit(e) {
    e.preventDefault()
      fetch("http://localhost:3001/movies", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newMovie)
      })
  }

  function handleChange(e) {
    setNewMovie({
      ...newMovie, [e.target.name]: e.target.value
    })
  }

  return (
    <form className="new-movie-form" onSubmit={handleSubmit}>
        <h3>Add Movie</h3>
      <input placeholder="Title" name="title" onChange={handleChange}/><br/>
      <select name="genre" onChange={handleChange}>
        <option value="" disabled selected>Select Genre:</option>
      <option>Action</option>
      <option>Horror</option>
      <option>Drama</option>
      <option>Comedy</option>
      </select><br/>
      <label>Watched?
      <input type="checkbox" name="watched" onChange={handleChange}/>
      </label><br/>
      <input placeholder="Image" name="image" onChange={handleChange}/><br/>
      <textarea placeholder="Description" rows={10} name="description" onChange={handleChange}/><br/>
      <input type="submit" value="Add Movie"/>
    </form>
  );
}

export default MovieForm;