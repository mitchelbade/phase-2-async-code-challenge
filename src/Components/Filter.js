import React from 'react'

function Filter() {

  return (
    <div>
        <select>
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
