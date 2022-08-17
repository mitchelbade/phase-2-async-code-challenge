import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

  return (
    <div>
        <h1>Welcome to Watchlist!</h1>
        <Link to={"/movies"}>
          <button>Movie List</button>
        </Link>
        <Link to={"/movies/new"}>
          <button>Add New Movies</button>
        </Link>
    </div>
    
  )
}
