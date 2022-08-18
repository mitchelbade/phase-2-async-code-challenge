import React from 'react'

function Filter({ genre, onGenreChange }) {

  return (
    <div>
        <select
        value={genre}
        onChange={(e) => onGenreChange(e.target.value)}
        >
            <option value="" selected>All</option>
            <option>Action</option>
            <option>Horror</option>
            <option>Drama</option>
            <option>Comedy</option>
        </select>
    </div>
  )
}

export default Filter;
