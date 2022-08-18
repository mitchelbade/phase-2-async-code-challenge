import React from "react";
import { useState } from 'react'
import Comments from './Comments'
import '../App.css';

function MovieCard({ movie }) {
  const [comments, setComments] = useState([])
  const { title, description, genre, image } = movie

  return (
    <div>
      <img className="photo" src={image} />
      <h3>Title: {title}</h3>
      <p>Genre: {genre}</p>
      <p>
        <strong>Description: {description}</strong>
      </p>
      <button>Mark as watched</button>
      <Comments comments={comments} setComments={setComments}/>
    </div>
  );
}

export default MovieCard;